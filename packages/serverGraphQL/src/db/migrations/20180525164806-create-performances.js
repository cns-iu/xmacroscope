module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'Performances',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
  ),
  down: queryInterface => queryInterface.dropTable('Performances'),
};
