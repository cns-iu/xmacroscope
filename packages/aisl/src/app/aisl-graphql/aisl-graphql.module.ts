import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLMessageService } from './shared/graphql-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GraphQLMessageService]
})
export class AislGraphqlModule {
  constructor(private graphQLMessageService: GraphQLMessageService) {
  }
}
