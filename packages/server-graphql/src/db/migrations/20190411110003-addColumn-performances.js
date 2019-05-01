module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'Performances',
      'org',
      {
        allowNull: false,
        defaultValue: 'test',
        type: Sequelize.STRING,
      }
    ),
    queryInterface.addColumn(
      'Performances',
      'importedAt',
      {
        type: Sequelize.DATE
      }
    ),
  ]),
  down: queryInterface => Promise.all([
    queryInterface.removeColumn('Performances', 'org'),
    queryInterface.removeColumn('Performances', 'importedAt'),
  ]),
};
