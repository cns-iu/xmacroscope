//
// Runs
//
// Model for storing runs
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Run = sequelize.define('Run', {
  opponent: { type: Sequelize.STRING },
  start: { type: Sequelize.DATE },
  end: { type: Sequelize.DATE },
}, {
  paranoid: true,
});

export default Run;
