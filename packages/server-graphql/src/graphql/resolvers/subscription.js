import pubsub from './pubsub';

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

export default Subscription;
