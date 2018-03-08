import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { MessageService } from './shared/message.service';
import { GraphQLMessageService } from './shared/graphql-message.service';
import { MockMessageService } from './shared/mock-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [MessageService, GraphQLMessageService, MockMessageService]
})
export class AislBackendModule {
  constructor(private graphQLMessageService: GraphQLMessageService) {
  }
}
