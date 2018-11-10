//
// Person
//
// Model for tracking people who participate in the experience
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Person = sequelize.define('Person', {
  icon: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING },
  ageGroup: { type: Sequelize.STRING },
  favoriteActivity: { type: Sequelize.STRING },
  height: { type: Sequelize.INTEGER },
  zipCode: { type: Sequelize.STRING },
  latitude: { type: Sequelize.FLOAT(9, 6) },
  longitude: { type: Sequelize.FLOAT(9, 6) },
  state: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Person;
