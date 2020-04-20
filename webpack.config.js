const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');

const libraryName = pkg.name;

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, './browser/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [new Visualizer(), new webpack.IgnorePlugin(/\.\/node|^ws$/)],
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
