import { pubsub } from './subscriptions';
import * as moment from 'moment';

export const resolvers: any = {
  Query: () => { },
  Mutation: {
    sendMessage: (obj, args, context, info) => {
      const message = args.message;

      switch (message.type) {
        case 'run-selected':
          pubsub.publish(message.type, { runSelected: message });
          break;
        case 'race-initiated':
          pubsub.publish(message.type, { raceInitiated: message });
          break;
        case 'race-completed':
          pubsub.publish(message.type, { raceCompleted: message });
          break;
        default:
          return false;
      }
      return true;
    }
  },
  Subscription: {
    runSelected: {
      subscribe: () => pubsub.asyncIterator('run-selected')
    },
    raceInitiated: {
      subscribe: () => pubsub.asyncIterator('race-initiated')
    },
    raceCompleted: {
      subscribe: () => pubsub.asyncIterator('race-completed')
    },
    runCompletedRecords: {
      subscribe: () => pubsub.asyncIterator('run-completed-records')
    },
    runCompleted: {
      subscribe: () => pubsub.asyncIterator('run-completed')
    },
  }
};
