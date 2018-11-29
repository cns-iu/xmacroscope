import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './pubsub';

// Mutations
const SendMessage = baseResolver
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
          pubsub.publish(savedMessage.type, { runCompletedSubscription: savedMessage });
          break;
        default:
          console.log('Message error');
          return false;
      }
      return true;
    }));

const MessageResolvers = {
  // Prevent resolver validation from error'ing on Message.
  // Since Message doesn't have a resolver, but is an interface, we need to do this to prevent
  // a validation error from being thrown.
  Message: {
    __resolveType() {
      return null;
    },
  },
  Mutation: {
    SendMessage,
  },
};

export default MessageResolvers;
