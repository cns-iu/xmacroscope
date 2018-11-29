//
// Webpack configuration for the development environment
//
// Enable Hot Module reload so that we don't need to restart the server
// during development.
//
const merge = require('webpack-merge');
const StartServerPlugin = require('start-server-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: './build',
  },

  //
  // Auto start dev server after build
  //
  plugins: [
    new StartServerPlugin('server.js'),
  ],
});
