import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


export class GraphqlClient {
  readonly client: ApolloClient<any>;

  constructor(private httpEndpoint: string, private wsEndpoint?: string) {
    if (!wsEndpoint) {
      this.wsEndpoint = httpEndpoint;
    }
    this.client = this.createClient();
  }

  createClient(): ApolloClient<any> {
    const client = new ApolloClient({
      link: this.createLink(this.httpEndpoint, this.wsEndpoint),
      cache: this.createCache()
    });

    return client;
  }

  createLink(httpEndpoint: string, wsEndpoint: string): ApolloLink {
    // FIXME: Assumes http and ws endpoints have same url, but different protocols
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
        const { kind, operation } = getMainDefinition(query) as any;
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
