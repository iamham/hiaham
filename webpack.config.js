'use strict'
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
      path: './bin',
      filename: 'app.bundle.js',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test:   /\.css$/,
          loader: "style-loader!css-loader!postcss-loader"
        }
      ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ]
}
