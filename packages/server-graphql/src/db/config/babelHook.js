//------------------------------------------------------------------------------
// Hook to allow Sequelize CLI interface to use ES6 config
//
// This is called from the .sequelizerc file.
//------------------------------------------------------------------------------
require('babel-core/register');

module.exports = require('./config');
