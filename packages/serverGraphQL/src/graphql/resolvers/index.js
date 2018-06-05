import { combineResolvers } from 'apollo-resolvers';
import pubsub from './subscriptions';
import MessageResolver from './message';
import RunResolver from './run';
import SettingResolver from './setting';

// TODO - Break these out into a subscription file
const Subscription = {
  Subscription: {
    runSelected: {
      subscribe: () => pubsub.asyncIterator('run-selected'),
    },
    raceInitiated: {
      subscribe: () => pubsub.asyncIterator('race-initiated'),
    },
    raceCompleted: {
      subscribe: () => pubsub.asyncIterator('race-completed'),
    },
    runCompletedRecords: {
      subscribe: () => pubsub.asyncIterator('run-completed-records'),
    },
    runCompleted: {
      subscribe: () => pubsub.asyncIterator('run-completed'),
    },
  },
};

const resolvers = combineResolvers([
  MessageResolver,
  RunResolver,
  SettingResolver,
  Subscription,
]);

export default resolvers;
