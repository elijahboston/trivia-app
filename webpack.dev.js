const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv()
  ],
  devServer: {
    publicPath: '/',
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
});