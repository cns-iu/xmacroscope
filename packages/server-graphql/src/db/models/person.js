//
// Person
//
// Model for tracking people who participate in the experience
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Person = sequelize.define('Person', {
  name: { type: Sequelize.STRING },
  icon: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING },
  gender: { type: Sequelize.STRING },
  ageGroup: { type: Sequelize.STRING },
  handedness: { type: Sequelize.STRING },
  zipcode: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Person;

