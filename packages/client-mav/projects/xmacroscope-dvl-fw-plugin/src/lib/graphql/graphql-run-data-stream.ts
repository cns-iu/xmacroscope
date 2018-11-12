import { pick } from 'lodash';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { Observable, from, merge } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';
import { RunCompletedMessage, Message } from '../shared/message';
import { asMessage, RECENT_RUNS, MESSAGE_SUBSCRIPTION } from './graphql-queries';


export class GraphQLRunDataStream implements RecordStream<Run> {
  private client: ApolloClient<any>;
  id = 'runs';
  label = 'Runs';

  constructor(private runStreamController: RunStreamController, private endpoint: string) {
    this.client = this.createClient();
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
    return Observable.create(observer => {
      // NOTE: apollo-client uses Zen-Observable, so we must adapt it to be an RxJS Observable
      this.client.watchQuery<{data: {Runs: Run[]}}, {lastX: number}>({ query: RECENT_RUNS, variables: {lastX}})
        .subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
    }).pipe(
      map<{data: {Runs: Run[]}}, Message[]>(results => results.data.Runs.map(run =>
        asMessage({ type: 'run-completed', timestamp: run.end, run})
      )),
      concatMap<RunCompletedMessage[], Message>(r => from(r))
    );
  }

  subscribeToMessages(): Observable<Message> {
    return Observable.create(observer => {
      // NOTE: apollo-client uses Zen-Observable, so we must adapt it to be an RxJS Observable
      this.client.subscribe<{data: {runCompletedSubscription: any}}>({ query: MESSAGE_SUBSCRIPTION })
        .subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
    }).pipe(
      map<{data: {runCompletedSubscription: any}}, Message>(results =>
        asMessage(results.data.runCompletedSubscription)
      )
    );
  }

  createClient(): ApolloClient<any> {
    const client = new ApolloClient({
      link: this.createLink(this.endpoint, this.endpoint),
      cache: this.createCache()
    });

    return client;
  }

  createLink(httpEndpoint: string, wsEndpoint: string): ApolloLink {
    // FIXME: Assumes http and ws enpoints have same url, but different protocols
    if (httpEndpoint.startsWith('/')) {
      const url = new URL(httpEndpoint, window.location.href);
      httpEndpoint = url.href;
      url.protocol = url.protocol.replace('http', 'ws');
      wsEndpoint = url.href;
    } else {
      const wsUrl = new URL(wsEndpoint);
      if (wsUrl.protocol !== 'ws') {
        wsUrl.protocol = wsUrl.protocol.replace('http', 'ws');
        wsEndpoint = wsUrl.href;
      }
    }
    console.log(wsEndpoint);

    // Create an http link:
    const httpLink = new HttpLink({
      uri: httpEndpoint
    });

    // Create a WebSocket link:
    const wsLink = new WebSocketLink({
      uri: wsEndpoint,
      options: {
        reconnect: true
      }
    });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const networkLink = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      httpLink,
    );

    const link = ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      networkLink
    ]);

    return link;
  }

  createCache(): InMemoryCache {
    return new InMemoryCache();
  }
}
