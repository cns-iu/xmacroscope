import { combineResolvers } from 'apollo-resolvers';
import { GraphQLDateTime } from 'graphql-iso-date';
import pubsub from './subscriptions';
import MessageResolver from './message';
import RunResolver from './run';
import SettingResolver from './setting';

const scalarResolvers = {
  Date: GraphQLDateTime,
};

// TODO - Break these out into a subscription file
const Subscription = {
  Subscription: {
    runSelectedSubscription: {
      subscribe: () => pubsub.asyncIterator('run-selected'),
    },
    runInitiatedSubscription: {
      subscribe: () => pubsub.asyncIterator('run-initiated'),
    },
    runCompleted: {
      subscribe: () => pubsub.asyncIterator('run-completed'),
    },
    runCompletedRecordsSubscription: {
      subscribe: () => pubsub.asyncIterator('run-completed-records'),
    },
  },
};

const resolvers = combineResolvers([
  scalarResolvers,
  MessageResolver,
  RunResolver,
  SettingResolver,
  Subscription,
]);

export default resolvers;
