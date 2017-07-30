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
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0'],
          }
        },
        {
          test: /\.(svg|png)(\?.*)?$/,
          loader: "url-loader?mimetype=image/png"
        },
        {
          test: /\.(jpg)(\?.*)?$/,
          loader: "url-loader?mimetype=image/jpg"
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader'
        },
        {
          test: /\.(eot|woff2|woff|ttf|otf|)(\?.*)?$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [poststylus([ 'autoprefixer' ])]
          }
        }
      })
    ]
}
