'use strict';

var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: [
    'webpack/hot/dev-server', 
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: node_modules
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }]
  }
};
