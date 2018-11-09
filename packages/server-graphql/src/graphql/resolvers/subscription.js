import pubsub from './pubsub';

const Subscription = {
  Subscription: {
    signupStartSubscription: {
      subscribe: () => pubsub.asyncIterator('signup-started'),
    },
    runSelectedSubscription: {
      subscribe: () => pubsub.asyncIterator('run-selected'),
    },
    runInitiatedSubscription: {
      subscribe: () => pubsub.asyncIterator('run-initiated'),
    },
    runCompletedSubscription: {
      subscribe: () => pubsub.asyncIterator('run-completed'),
    },
    runCompletedRecordsSubscription: {
      subscribe: () => pubsub.asyncIterator('run-completed-records'),
    },
  },
};

export default Subscription;
