/**
 * Establish connection to the database with the Sequelize ORM
 */
import Sequelize from 'sequelize';
import sequelize from './sequelize';
import Message from './Message';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.message = Message;

export default db;
