/**
 * Establish connection to the database with the Sequelize ORM
 */
import Sequelize from 'sequelize';

// Create MySQL connection
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    operatorsAliases: false,
    storage: process.env.DB_STORAGE,
  },
);

export default sequelize;
