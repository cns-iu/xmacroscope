//
// Webpack configuration for the development environment
//
// Enable Hot Module reload so that we don't need to restart the server
// during development.
//
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const StartServerPlugin = require('start-server-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: false,
  mode: 'production',
  entry: ['./src/index'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },

  // Dev server and hot reload plugins
  plugins: [
    // new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv(),
  ],
});
