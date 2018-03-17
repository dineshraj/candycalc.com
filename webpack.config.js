const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'production';
const isProduction = (env === 'production');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const mode = isProduction ? 'production' : 'development';

function getPlugins() {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new MiniCssExtractPlugin({filename: "bundle.css"}),
    ...isProduction ? getProductionPlugins() : []
  ];
}

function getProductionPlugins() {
  return [
    new webpack.NoEmitOnErrorsPlugin(),
    new SWPrecacheWebpackPlugin({
      cacheId: 'candycalc:0004',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      mergeStaticsConfig: true,
      staticFileGlobsIgnorePatterns: [/\.map$/],
      staticFileGlobs: [
        'https://fonts.gstatic.com',
        'https://fonts.googleapis.com'
      ]
    }),
  ];
}

module.exports = {
  mode,
  entry: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  devtool: isProduction ? false : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              precision: 8,
              data: "$ENV: " + "PRODUCTION" + ";"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader']
      }
    ]
  },
  optimization: {
    minimize: isProduction
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    symlinks: false
  },
  plugins: getPlugins()
};
