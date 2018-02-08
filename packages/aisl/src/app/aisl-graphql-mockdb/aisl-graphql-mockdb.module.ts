import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AislBackendModule, MessageService } from '../aisl-backend';
import { MockMessageService } from './shared/mock-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MockMessageService]
})
export class AislGraphqlMockdbModule {
  constructor(private mockMessageService: MockMessageService) {
    // Injecting the mock message service when the Module is imported.
    // The mock message service will then start mocking immediately.
    mockMessageService.startMocking();
  }
}
