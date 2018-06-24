import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

import { createClientDBLink } from 'aisl-clientdb';

import { environment } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ApolloModule
  ],
  declarations: [],
  providers: []
})
export class GraphqlConnectionModule {
  constructor(private apollo: Apollo) {
    // const link = this.createLink(environment.graphqlEndpoint);
    // const dataIdFromObject = result => result.id;
    // const cache = new InMemoryCache({ dataIdFromObject });

    // apollo.create({ link, cache });
  }

  createLink(endpoint: string): ApolloLink {
    if (endpoint === 'clientdb') {
      return createClientDBLink();
    }
    if (endpoint.startsWith('/')) {
      const url = new URL(endpoint, window.location.href);
      url.protocol = url.protocol.replace('http', 'ws');
      endpoint = url.href;
    }

    return new WebSocketLink({
      uri: endpoint,
      options: {
        reconnect: true
      }
    });
  }
}
