import { Injectable } from '@angular/core';

import { GraphQLMessageService } from './graphql-message.service';
import { RaceMocker } from 'aisl-api';

@Injectable()
export class MockMessageService {
  private mocker: RaceMocker;
  private _mocking = false;

  constructor(private messageService: GraphQLMessageService) {
    this.mocker = new RaceMocker(messageService);
  }

  get mocking(): boolean {
    return this.mocker.mocking;
  }
  startMocking() {
    this.mocker.startMocking();
  }
  stopMocking() {
    this.mocker.stopMocking();
  }
}
