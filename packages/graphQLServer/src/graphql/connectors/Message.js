/**
 * Message content type
 *
 * Datatype for generic messages from the client systems.
 */
import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Message = sequelize.define('message', {
  type: { type: Sequelize.STRING },
  timestamp: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Message;
