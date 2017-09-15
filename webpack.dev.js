const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    open: true,
    contentBase: 'dist',
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});