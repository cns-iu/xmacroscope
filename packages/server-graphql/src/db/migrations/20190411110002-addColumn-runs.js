module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Runs',
      'org',
      {
        allowNull: false,
        defaultValue: 'test',
        type: Sequelize.STRING,
      }
    ),
    queryInterface.addColumn(
      'Runs',
      'importedAt',
      {
        type: Sequelize.DATE
      }
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.removeColumn('Runs', 'org'),
    queryInterface.removeColumn('Runs', 'importedAt'),
  ]),
};
