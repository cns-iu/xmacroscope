module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    org: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    timestamp: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    importedAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Messages'),
};
