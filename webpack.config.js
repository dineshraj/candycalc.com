const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'production';
const isProduction = (env === 'production');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getPlugins() {
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new ExtractTextPlugin({ filename: 'bundle.css' }),
    ...isProduction ? getProductionPlugins() : []
  ]
}

function getProductionPlugins() {
  return [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ];
}

module.exports = {
  entry: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  devtool: isProduction ? false : 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader']
       }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    symlinks: false
  },
  plugins: getPlugins()
};
