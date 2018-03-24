//------------------------------------------------------------------------------
// Database connection config for each environment
//
// This is used by the sequelize CLI as well as the GraphQL server to
// connect to the db in different environments.
//
// Right now production and dev load the same env vars.
// On dev we load them from the .env file and on prod we load them from the
// environment, which is set by the process running the node server.
//------------------------------------------------------------------------------
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    host: process.env.DB_HOST,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    host: process.env.DB_HOST,
  },
};
