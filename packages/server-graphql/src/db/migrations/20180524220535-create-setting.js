module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Settings', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    location: {
      type: Sequelize.STRING,
      unique: true,
    },
    usState: {
      type: Sequelize.STRING,
    },
    preRunDelay: {
      type: Sequelize.INTEGER,
    },
    postRunDelay: {
      type: Sequelize.INTEGER,
    },
    startLineTimeout: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.INTEGER,
    },
    longitude: {
      type: Sequelize.INTEGER,
    },
    runTimeout: {
      type: Sequelize.INTEGER,
    },
    attractDelay: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
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
  down: queryInterface => queryInterface.dropTable('Settings'),
};
