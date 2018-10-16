module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('People', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    icon: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    ageGroup: {
      type: Sequelize.STRING,
    },
    favoriteActivity: {
      type: Sequelize.STRING,
    },
    handedness: {
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.INTEGER,
    },
    siblings: {
      type: Sequelize.INTEGER,
    },
    zipcode: {
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
