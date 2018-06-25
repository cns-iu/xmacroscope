const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { NoEmitOnErrorsPlugin } = require('webpack');
const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  "devtool": "source-map",
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "../../node_modules"
    ]
  },
  "resolveLoader": {
    "modules": [
      "../../node_modules"
    ]
  },
  "entry": {
    "src/worker.bundle": [
      './src/worker.ts'
    ]
  },

  "output": {
    "path": process.cwd(),
    "filename": "[name].js"
  },

  "watch": false,

  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
      },
      {
        "test": /\.ts$/,
        "loader": "@ngtools/webpack",
        options: {
          "tsConfigPath": "src/tsconfig.app.json"
        }
      }
    ]
  },
  "plugins": [
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
    // new AotPlugin({
    //   "mainPath": "index.ts",
    //   "exclude": [],
    //   "tsConfigPath": "src/tsconfig.app.json",
    //   "skipCodeGeneration": true
    // })
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  }
};
