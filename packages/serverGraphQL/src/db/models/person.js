//
// Person
//
// Model for tracking people who participate in the experience
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Person = sequelize.define('Person', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Person;

