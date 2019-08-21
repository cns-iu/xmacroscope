import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { ApolloClient } from 'apollo-client';
import { pick, reverse } from 'lodash';
import { defer, from, merge, Observable } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

import { Message } from '../shared/message';
import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';
import { GraphqlClient } from './graphql-client';
import { asMessage, MESSAGE_SUBSCRIPTION, RECENT_RUNS } from './graphql-queries';


export class GraphQLRunDataStream implements RecordStream<Run> {
  private client: ApolloClient<any>;
  id = 'runs';
  label = 'Runs';

  constructor(private runStreamController: RunStreamController, private endpoint: string) {
    this.client = new GraphqlClient(endpoint).client;
    merge(
      this.getPastRunsCompleted(runStreamController.historySize),
      this.subscribeToMessages()
    ).subscribe((message) => runStreamController.sendMessage(message));
  }

  asObservable(): Observable<RawChangeSet<Run>> {
    return this.runStreamController.createRunStream();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }

  getPastRunsCompleted(lastX: number): Observable<Message> {
    return defer(async () => {
      const results = await this.client.query<{Runs: Run[]}, {lastX: number}>({ query: RECENT_RUNS, variables: {lastX}});
      return reverse(results.data.Runs); // Data comes in from youngest to oldest, we need the reverse
    }).pipe(
      map(runs => runs.map(run =>
        asMessage({ type: 'run-finished', timestamp: run.end, run})
      )),
      concatMap(r => from(r)),
      delay(200)
    );
  }

  subscribeToMessages(): Observable<Message> {
    return new Observable(observer => {
      // NOTE: apollo-client uses Zen-Observable, so we must adapt it to be an RxJS Observable
      const sub = this.client.subscribe<{data: {runMessageSubscription: any}}>({ query: MESSAGE_SUBSCRIPTION })
        .subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      return () => sub.unsubscribe();
    }).pipe(
      map<{data: {runMessageSubscription: any}}, Message>(results =>
        asMessage(results.data.runMessageSubscription)
      )
    );
  }
}
