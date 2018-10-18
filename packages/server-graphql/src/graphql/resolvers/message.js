import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './subscriptions';

// Mutations
const sendMessage = baseResolver
  .createResolver((root, args) => db.message.create(args.message)
    .then((savedMessage) => {
      switch (savedMessage.type) {
        case 'run-selected':
          pubsub.publish(savedMessage.type, { runSelectedSubscription: savedMessage });
          break;
        case 'run-initiated':
          pubsub.publish(savedMessage.type, { runInitiatedSubscription: savedMessage });
          break;
        case 'run-completed':
          pubsub.publish(savedMessage.type, { runCompleted: savedMessage });
          break;
        default:
          console.log('Message error');
          return false;
      }
      return true;
    }));

const MessageResolvers = {
  Mutation: {
    sendMessage,
  },
};

export default MessageResolvers;
