/**
 * Webpack default configuration
 *
 * Common Webpack config for development and production environments.
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Run as a node app
  target: 'node',

  // TODO: document what this configures.
  // Not sure why we're not using the default.
  node: {
    __filename: true,
    __dirname: true,
  },

  /**
   * Externals ensures that webpack doesn't try to compile the node_modules
   * folder. Excluding the node_modules fixes conflicts with sequilize.
   */
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],

  /**
   * Configure webpack modules for each language type
   */
  module: {
    rules: [
      /**
       * Javascript
       *
       * Use babel to transpile ES6 code to raw Node.
       * Configure babel here instead of in a .babelrc file.
       */
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

      /**
       * GraphQL
       *
       * Process GraphQL files with the graphql-tag loader from Apollo.
       * This allows us to break GraphQL queries and mutations into their
       * own files.
       */
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },

  /**
   * Compile everything and output it to the build/server.js file.
   */
  output: { path: path.join(__dirname, 'build'), filename: 'server.js' },
};
