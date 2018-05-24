//
// Message content type
//
// Datatype for generic messages from the client systems.
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const People = sequelize.define('people', {
  firstName: Sequelize.STRING,
}, { });

export default People;
