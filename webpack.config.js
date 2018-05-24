const path = require('path');
const config = require('./config/config')();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: config.entry_file,
    output: {
        path: path.resolve(__dirname, config.build_path),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.s?[ac]ss$/,
            use:[
              {
                loader : MiniCssExtractPlugin.loader
              },
              {
                loader: "css-loader",
              },
              {
                loader: 'postcss-loader',
                  options: {
                    plugins: [
                        autoprefixer({
                            browsers:['ie >= 8', 'last 4 version']
                        })
                      ],
                    sourceMap: true
                  }
              },
              {
                loader: "sass-loader"
              },
            ]
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: config.html_file,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new UglifyJsPlugin()
      ],
      resolve: {
        extensions: config.extensions,
      },
      devServer: {
        historyApiFallback: true,
        hot: true,
        // contentBase: config.build_path,
      }
}