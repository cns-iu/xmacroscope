import pubsub from './pubsub';

const Subscription = {
  Subscription: {
    runMessageSubscription: {
      subscribe: () => pubsub.asyncIterator('run-message'),
    },
  },
};

export default Subscription;
