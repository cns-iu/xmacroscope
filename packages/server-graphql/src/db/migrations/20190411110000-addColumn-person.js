module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'People',
      'org',
      {
        allowNull: false,
        defaultValue: 'test',
        type: Sequelize.STRING,
      }
    ),
    queryInterface.addColumn(
      'People',
      'importedAt',
      {
        type: Sequelize.DATE
      }
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.removeColumn('People', 'org'),
    queryInterface.removeColumn('People', 'importedAt'),
  ]),
};
