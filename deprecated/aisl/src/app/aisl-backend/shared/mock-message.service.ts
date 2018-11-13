import { Injectable } from '@angular/core';

import { GraphQLMessageService } from './graphql-message.service';
import { MessageService } from './message.service';

import { RaceMocker } from 'aisl-api';

@Injectable()
export class MockMessageService {
  private mocker: RaceMocker;
  private _mocking = false;

  constructor(private graphQLMessageService: GraphQLMessageService, private localMessageService: MessageService) { }

  get mocking(): boolean {
    return this.mocker && this.mocker.mocking;
  }
  startMocking(useDirectMessaging = true) {
    if (useDirectMessaging) {
      this.mocker = new RaceMocker(this.localMessageService, 50);
    } else {
      this.mocker = new RaceMocker(this.graphQLMessageService, 50);
    }

    this.mocker.startMocking();
  }
  stopMocking() {
    if (this.mocker) {
      this.mocker.stopMocking();
    }
  }
}
