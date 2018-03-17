const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'production';
const isProduction = (env === 'production');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');


const mode = isProduction ? 'production' : 'development';

function getPlugins() {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Candy Calculator - Pokemon Go Lucky Egg and Candy Evolution Calculator',
      template: 'views/index.html',
      favicon: 'static/favicon.png'
    }),
    new MiniCssExtractPlugin({filename: 'bundle.[chunkhash].css'}),
    ...isProduction ? getProductionPlugins() : []
  ];
}

function getProductionPlugins() {
  return [
    new SWPrecacheWebpackPlugin({
      cacheId: 'candycalc:0004',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      mergeStaticsConfig: true,
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/],
      staticFileGlobs: [
        'https://fonts.gstatic.com',
        'https://fonts.googleapis.com'
      ]
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ];
}

module.exports = {
  mode,
  entry: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.[chunkhash].js'
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
              data: '$ENV: ' + 'PRODUCTION' + ';'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096
          }
        }]
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
