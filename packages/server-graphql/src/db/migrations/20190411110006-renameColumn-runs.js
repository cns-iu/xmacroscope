module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.renameColumn(
      'Runs',
      'start',
      'startTime'
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.renameColumn('Runs', 'startTime', 'start'),
  ]),
};
