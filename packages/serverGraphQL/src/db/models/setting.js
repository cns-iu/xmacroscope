//
// Settings
//
// Table for storing instances of exhibit settings
// Settings include variables associated with the operations of the exhibit.
// In some locations the track may be different sizes, and we may want
// to configure different timeouts for exhibit operations.
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Setting = sequelize.define('Setting', {
  location: { type: Sequelize.STRING, unique: true },
  // Milliseconds...
  //
  // ...of time between start race signal, and race actually beginning. This
  // accounts for the 3,2,1 countdown in the opponent projection video. You can
  // shorten this if this is not part of the experince.
  preRaceDelay: { type: Sequelize.INTEGER },

  // ...until race restart, after final runner crosses the finish line.
  postRaceDelay: { type: Sequelize.INTEGER },

  // ...after start to wait before reseting the experience if no one crosses
  // the start line. Starts after preRaceDelay
  startLineTimeout: { type: Sequelize.INTEGER },

  latitude: { type: Sequelize.INTEGER },

  // ...after start to wait before resetting the experience if no one crosses
  // the finish line. Starts after startLineTimeout.
  raceTimeout: { type: Sequelize.INTEGER },

  // of inactivity before triggering attract loop state.
  attractDelay: { type: Sequelize.INTEGER },
}, {
  paranoid: true,
});

export default Setting;
