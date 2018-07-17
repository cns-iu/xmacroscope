const path = require('path');
const nodeExternals = require('webpack-node-externals');

//
// Webpack configuration
//
// We use webpack to compile the GraphQL server application
// for production and development.
//
// On development it runs hot reloader so changes are automatically updated.
// On production it builds files in the build directory.
//
module.exports = {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },

  //
  // Externals ensures that webpack doesn't try to compile the node_modules
  // folder. Excluding the node_modules fixes problems with sequilize.
  // We need an additional entry here that maps to the lerna monorepo
  // node_modules folder, because nodeExternals won't walk the symlinks.
  //
  externals: [
    nodeExternals({ whitelist: ['webpack/hot/poll?1000'] }),
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
      modulesDir: path.resolve(__dirname, '../../node_modules')
    })],

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

  // Compile everything and output it to the build/server.js file.
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },
};
