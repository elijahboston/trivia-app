const merge = require('webpack-merge');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
});