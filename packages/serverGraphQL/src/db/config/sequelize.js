//------------------------------------------------------------------------------
// Establish connection to the database with the Sequelize ORM
//
// Load the config details based on the node environment
//------------------------------------------------------------------------------
import Sequelize from 'sequelize';
import config from './config';

const envConfig = process.env.NODE_ENV !== 'production'
  ? config.development
  : config.production;

// Create DB connection
const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect,

    // Operator aliases are a security issue, disable them.
    operatorsAliases: false,
  },
);

export default sequelize;
