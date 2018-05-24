//------------------------------------------------------------------------------
// Export a config object, based upon environment
//
// This is broken out into a separate object so that we can use it in the
// Sequelize syserver setup, as well as in Sequelize CLI migrations
//------------------------------------------------------------------------------
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const storage = env === 'development' ? `private/${process.env.DB_STORAGE}` : '';

export default {
  [env]: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    storage,
    host: process.env.DB_HOST,
  },
};
