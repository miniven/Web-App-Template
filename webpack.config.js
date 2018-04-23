const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    main: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            { 
              loader: 'css-loader',
              options: {
                modules: false
              } 
            },
            { loader: 'postcss-loader' }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(png|jpg|svg)$/,  
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              publicPath: '../',
              name: 'images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 95
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          publicPath: '../',
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "./styles/[name].css",
      disable: process.env.NODE_ENV === "development"
    }),
    new HtmlWebpackPlugin({
      template: './app/index.pug',
      favicon: './app/favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        TYPE: JSON.stringify(process.env.TYPE),
      }
    }),
    new dotenv()
  ]
};

module.exports = config;