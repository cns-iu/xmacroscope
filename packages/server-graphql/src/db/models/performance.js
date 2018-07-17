//
// Performances
//
// Model for storing performances.
// Performances are a generic parent event for any visitor participating
// in an exhibit experience.
//
// Right now we only are developing for the Run exhibit experience, but
// we want to allow for multiple types of exhibit experiences.
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Performance = sequelize.define('Performance', {
  type: { type: Sequelize.STRING },
}, {
  paranoid: true,
});

export default Performance;
