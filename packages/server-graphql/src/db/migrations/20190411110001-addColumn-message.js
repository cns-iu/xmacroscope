module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Messages',
      'org',
      {
        allowNull: false,
        defaultValue: 'test',
        type: Sequelize.STRING,
      }
    ),
    queryInterface.addColumn(
      'Messages',
      'importedAt',
      {
        type: Sequelize.DATE
      }
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.removeColumn('Messages', 'org'),
    queryInterface.removeColumn('Messages', 'importedAt'),
  ]),
};
