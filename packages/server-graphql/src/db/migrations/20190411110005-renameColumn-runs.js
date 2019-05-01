module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.renameColumn(
      'Runs',
      'end',
      'endTime'
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.renameColumn('Runs', 'endTime', 'end'),
  ]),
};
