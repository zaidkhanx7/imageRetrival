const webpack=require("webpack");
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname + '/src/index.js',
   output: {
       path: __dirname + '/dist',
       publicPath: '/dist/',
        filename: 'bundle.js'
        },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' })
    ]
};
