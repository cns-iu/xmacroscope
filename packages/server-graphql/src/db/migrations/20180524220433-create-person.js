module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('People', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    icon: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    ageGroup: {
      type: Sequelize.STRING,
    },
    favoriteActivity: {
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.INTEGER,
    },
    zipCode: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.FLOAT(9, 6),
    },
    longitude: {
      type: Sequelize.FLOAT(9, 6),
    },
    state: {
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
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('People'),
};
