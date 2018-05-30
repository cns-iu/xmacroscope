module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Settings',
    [
      {
        location: 'smm',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        lattitude: 44.94258,
        longitude: -93.0999668,
      },
      {
        location: 'cns-iu',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        lattitude: 39.1726664,
        longitude: -86.5234313,
      },
      {
        location: 'cosi',
        preRaceDelay: 15540,
        postRaceDelay: 7500,
        startLineTimeout: 10000,
        raceTimeout: 7500,
        attractDelay: 120000,
        lattitude: 39.9598362,
        longitude: -83.0092084,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
