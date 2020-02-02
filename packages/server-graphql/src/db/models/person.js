//
// Person
//
// Model for tracking people who participate in the experience
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Person = sequelize.define('Person', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  icon: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING },
  age: { type: Sequelize.STRING },
  opponent: { type: Sequelize.STRING },
  shoes: { type: Sequelize.STRING },
  height: { type: Sequelize.INTEGER },
  zipCode: { type: Sequelize.STRING },
  latitude: { type: Sequelize.FLOAT(9, 6) },
  longitude: { type: Sequelize.FLOAT(9, 6) },
  state: { type: Sequelize.STRING },
  org: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Person;
