import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { WebSocketLink } from 'apollo-link-ws';

const link = new WebSocketLink({
  uri: `ws://localhost:4000/`, // FIXME: Externalize URL
  options: {
    reconnect: true
  }
});

const dataIdFromObject = result => result.id;
const cache = new InMemoryCache({ dataIdFromObject });

@NgModule({
  imports: [
    CommonModule,
    ApolloModule
  ],
  declarations: [],
  providers: []
})
export class AislGraphqlServerdbModule {
  constructor(private apollo: Apollo) {
    apollo.create({ link, cache });
  }
}
