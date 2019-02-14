import { pick } from 'lodash';
import { ApolloClient } from 'apollo-client';
import { Observable, defer, from, merge } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { reverse } from 'lodash';

import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';
import { RunFinishedMessage, Message } from '../shared/message';
import { asMessage, RECENT_RUNS, MESSAGE_SUBSCRIPTION } from './graphql-queries';
import { GraphqlClient } from './graphql-client';


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
    return defer<Run[]>(async () => {
      const results = await this.client.query<{Runs: Run[]}, {lastX: number}>({ query: RECENT_RUNS, variables: {lastX}});
      return reverse(results.data.Runs); // Data comes in from youngest to oldest, we need the reverse
    }).pipe(
      map<Run[], Message[]>(runs => runs.map(run =>
        asMessage({ type: 'run-finished', timestamp: run.end, run})
      )),
      concatMap<RunFinishedMessage[], Message>(r => from(r))
    );
  }

  subscribeToMessages(): Observable<Message> {
    return Observable.create(observer => {
      // NOTE: apollo-client uses Zen-Observable, so we must adapt it to be an RxJS Observable
      this.client.subscribe<{data: {runMessageSubscription: any}}>({ query: MESSAGE_SUBSCRIPTION })
        .subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
    }).pipe(
      map<{data: {runMessageSubscription: any}}, Message>(results =>
        asMessage(results.data.runMessageSubscription)
      )
    );
  }
}
