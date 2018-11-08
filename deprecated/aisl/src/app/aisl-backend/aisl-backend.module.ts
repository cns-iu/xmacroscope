import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { MessageService } from './shared/message.service';
import { GraphQLMessageService } from './shared/graphql-message.service';
import { MockMessageService } from './shared/mock-message.service';

import { environment } from '../shared';

@NgModule({
  imports: [CommonModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class AislBackendModule {
  constructor(private graphQLMessageService: GraphQLMessageService, private mockMessageService: MockMessageService) {
    if (environment.mockMessages) {
      mockMessageService.startMocking();
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AislBackendModule,
      providers: [MessageService, GraphQLMessageService, MockMessageService]
    };
  }
}
