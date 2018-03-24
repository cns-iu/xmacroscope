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

const { dialect } = envConfig;
const database = dialect === 'sqlite' ? '' : envConfig.database;
const username = dialect === 'sqlite' ? '' : envConfig.username;
const password = dialect === 'sqlite' ? '' : envConfig.password;
const host = dialect === 'sqlite' ? '' : envConfig.host;
const storage = dialect === 'sqlite' ? envConfig.storage : '';
// Sequelize operator aliases are a security issue, disable them.
const operatorsAliases = false;

// Create DB connection
const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect,
    storage,
    operatorsAliases
  }
);

export default sequelize;
