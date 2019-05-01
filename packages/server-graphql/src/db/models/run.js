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
  startTime: { type: Sequelize.DATE },
  endTime: { type: Sequelize.DATE },
  org: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Run;
