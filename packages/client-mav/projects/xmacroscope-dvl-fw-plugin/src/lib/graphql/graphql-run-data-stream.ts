import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { ApolloClient } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { pick, reverse } from 'lodash';
import { defer, from, merge, Observable } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

import { Message } from '../shared/message';
import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';
import { GraphqlClient } from './graphql-client';
import { asMessage, MESSAGE_SUBSCRIPTION, RECENT_RUNS } from './graphql-queries';


export class GraphQLRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';

  private client: ApolloClient<unknown>;

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

  toJSON(): unknown {
    return pick(this, ['id', 'label']);
  }

  getPastRunsCompleted(lastX: number): Observable<Message> {
    return defer(async () => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const results = await this.client.query<{ Runs: Run[] }, { lastX: number }>({
        query: RECENT_RUNS,
        variables: { lastX }
      });

      return reverse(results.data.Runs); // Data comes in from youngest to oldest, we need the reverse
    }).pipe(
      map(runs => runs.map(run =>
        asMessage({ type: 'run-finished', timestamp: run.end, run })
      )),
      concatMap(r => from(r)),
      delay(200)
    );
  }

  subscribeToMessages(): Observable<Message> {
    type QueryResult = Record<'runMessageSubscription', unknown>;

    // Zen observables should technically be interoperable with rxjs observables
    // But to be on the safe side manually convert between them
    const queryResult = new Observable<FetchResult<QueryResult>>(observer => {
      const boundObserver = {
        next: observer.next.bind(observer),
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer)
      };

      const query = this.client.subscribe<QueryResult>({ query: MESSAGE_SUBSCRIPTION });
      const sub = query.subscribe(boundObserver);
      return () => sub.unsubscribe();
    });

    return queryResult.pipe(map(result => asMessage(result.data?.runMessageSubscription)));
  }
}
