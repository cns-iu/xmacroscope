var path = require('path');
var shell = require('shelljs');
var nodeExternals = require('webpack-node-externals');
var { ConcatSource } = require('webpack').sources;


class MakeExecutablePlugin {
  constructor(files) {
    this.files = files;
  }

  apply(compiler) {
    const pluginName = this.constructor.name;

    compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      compilation.hooks.processAssets.tap(pluginName, assets => {
        // Switch js files for executables
        this.files.forEach(file => {
          const jsFile = file + '.js';
          const asset = assets[jsFile];
          delete assets[jsFile];

          assets[file] = new ConcatSource(
            '#!/usr/bin/env node\n',
            asset
          );
        });
      });
    });

    compiler.hooks.assetEmitted.tap(pluginName, (file, { targetPath }) => {
      // Set permissions for executables
      if (this.files.some(f => f === file)) {
        shell.chmod(755, targetPath);
      }
    });
  }
}


module.exports = {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  entry: {
    'xmacroscope-export-project': path.resolve(__dirname, 'export-project.ts')
  },
  // mode: 'production',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.[tj]sx?$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: path.resolve('dist', 'xmacroscope-dvl-fw-plugin')
  },

  plugins: [
    new MakeExecutablePlugin([
      'xmacroscope-export-project'
    ])
  ]
};
