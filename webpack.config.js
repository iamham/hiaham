'use strict'
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')

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
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react'],
          }
        },
        {
          test: /\.(svg|png)(\?.*)?$/,
          exclude: /\.placeholder\.(jpg|png)$/,
          loader: "url-loader?mimetype=image/png"
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader'
        }
      ]
    },
    stylus: {
      use: [
        poststylus([ 'autoprefixer' ])
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ]
}
