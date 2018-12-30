//
// Runs
//
// Model for storing runs
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Run = sequelize.define('Run', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  start: { type: Sequelize.DATE },
  end: { type: Sequelize.DATE },
}, {
  paranoid: true,
});

export default Run;
