import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './subscriptions';

// Mutations
const sendMessage = baseResolver
  .createResolver((root, args) => db.message.create(args.message)
    .then((savedMessage) => {
      switch (savedMessage.type) {
        case 'run-selected':
          pubsub.publish(savedMessage.type, { runSelected: savedMessage });
          break;
        case 'race-initiated':
          pubsub.publish(savedMessage.type, { raceInitiated: savedMessage });
          break;
        case 'race-completed':
          pubsub.publish(savedMessage.type, { raceCompleted: savedMessage });
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
