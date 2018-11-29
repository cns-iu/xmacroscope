const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

//
// Webpack configuration
//
// We use webpack to compile the GraphQL server application for production and development.
//
module.exports = {
  entry: ['./src/index'],
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },

  //
  // Externals ensures that webpack doesn't try to compile the node_modules folder.
  //
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],

  //
  // Use babel to transpile ES6 code to raw node.
  // Set up the babel config here instead of in a .babelrc file.
  //
  module: {
    rules: [

      // Load JS files
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['env', { modules: false }], 'stage-0'],
              plugins: ['transform-regenerator', 'transform-runtime'],
            },
          },
        ],
        exclude: /node_modules/,
      },

      // Process GraphQL files with the graphql tag loader
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },

  //
  // Compile everything and output it to the build/server.js file.
  //
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },

  //
  // Load env variables
  //
  plugins: [new Dotenv()],
};
