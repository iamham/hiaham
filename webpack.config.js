'use strict'
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')

module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: '/Users/sarunpeetasai/Documents/GIT/hiaham/public',
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
          test: /\.(eot|woff2|woff|ttf|otf|)(\?.*)?$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.styl$/i,
          loader: 'style-loader!css-loader!stylus-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
    ]
}
