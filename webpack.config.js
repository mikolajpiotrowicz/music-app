const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const entryPoints = ['@babel/polyfill', './src/app'];
const plugins = [
  new ForkTsCheckerWebpackPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist/js'],
    verbose: true,
  }),
  new webpack.LoaderOptionsPlugin({
    debug: true,
    options: {
      noParse: /node_modules/,
    },
    exclude: /node_modules/,
  }),
  new Dotenv(),
];

const optimization = {};

module.exports = {
  devtool: 'eval-source-map',
  entry: entryPoints,
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/public'),
    publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: (url, resourcePath, context) => {
            console.log(url, resourcePath, context);
          },
        },
      },
    ],
  },
  plugins,
  optimization,
};
