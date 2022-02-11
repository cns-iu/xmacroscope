//
// Webpack configuration for the development environment
//
// Enable Hot Module reload so that we don't need to restart the server
// during development.
//
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: false,
  mode: 'development',
});
