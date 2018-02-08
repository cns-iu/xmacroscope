import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { link } from './shared/client-link';

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
export class AislGraphqlClientdbModule {
  constructor(private apollo: Apollo) {
    apollo.create({ link, cache });
  }
}
