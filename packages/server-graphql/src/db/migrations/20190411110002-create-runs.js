module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Runs', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    start: {
      type: Sequelize.DATE,
    },
    end: {
      type: Sequelize.DATE,
    },
    org: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    PersonId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'People',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
  down: queryInterface => queryInterface.dropTable('Runs'),
};
