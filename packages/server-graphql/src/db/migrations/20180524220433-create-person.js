module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('People', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    icon: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.STRING,
    },
    opponent: {
      type: Sequelize.STRING,
    },
    shoes: {
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
