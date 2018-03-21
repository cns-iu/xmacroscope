import baseResolver from './baseResolver';
import db from '../connectors/db';
import pubsub from './subscriptions';

/**
 * --- Mutations ---
 */

const sendMessage = baseResolver
  .createResolver((root, args) => {

    return db.message.create(args.message)
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
      });
  });

const MessageResolvers = {
  Mutation: {
    sendMessage: sendMessage,
  },
};

export default MessageResolvers;
