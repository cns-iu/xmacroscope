import { pubsub } from './subscriptions';

export const resolvers: any = {
  Query: () => { },
  Mutation: () => { },
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
