const config = require('./webpack.config.js');
const webpack = require('webpack');

config.devtool = 'cheap-source-map';

config.plugins.push(new webpack.LoaderOptionsPlugin({
  debug: false
}));

module.exports = config;
