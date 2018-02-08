import * as moment from 'moment';

import { Message } from '../../aisl-backend/shared/models';
import { RaceMocker } from '../../aisl-graphql-mockdb/shared/race-mocker';

import { pubsub } from '../../aisl-graphql-clientdb/shared/subscriptions';

export class MockRaces {
  private mocker: RaceMocker;

  constructor() {
    this.mocker = new RaceMocker(this);
    this.startMocking();
  }

  send(message: Message) {
    const outgoingMessage: any = Object.assign({}, message, {
      timestamp: moment(message.timestamp).format() // GraphQL timestamp is a String
    });

    switch (message.type) {
      case 'run-selected':
        pubsub.publish(message.type, { runSelected: outgoingMessage });
        break;
      case 'race-initiated':
        pubsub.publish(message.type, { raceInitiated: outgoingMessage });
        break;
      case 'race-completed':
        pubsub.publish(message.type, { raceCompleted: outgoingMessage });
        break;
    }
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
