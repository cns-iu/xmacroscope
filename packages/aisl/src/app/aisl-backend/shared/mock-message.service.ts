import { Injectable } from '@angular/core';

import { GraphQLMessageService } from './graphql-message.service';
import { MessageService } from './message.service';

import { RaceMocker } from 'aisl-api';

@Injectable()
export class MockMessageService {
  private mocker: RaceMocker;
  private _mocking = false;

  constructor(private graphQLMessageService: GraphQLMessageService, private localMessageService: MessageService) {
    this.mocker = new RaceMocker(localMessageService);
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
