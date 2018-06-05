// webpack 4

import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: path.resolve(__dirname, '../src'),
  // entry point
  entry: {
    main: path.resolve(__dirname, '../src/index.jsx'),
  },
  // source map
  devtool: 'inline-source-map',
  // build output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  // dev-server
  devServer: {
    contentBase: '/',
    hot: true,
  },

  optimization: {
    nodeEnv: 'production',
    minimize: true, // removes unnecessary and development specific
    // code when building for production
    concatenateModules: true, // turns on module concatenation
    splitChunks: { chunks: 'all' }, // this enables smart splitting, it split vender code that gets
    // larger than 30kb
    runtimeChunk: true, // read about this here https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { minimize: true } }, // enable minification of css file
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // This will apply the loader before the other ones
        enforce: 'pre',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: { limit: 10 * 1024 }, // inline files smaller than 10kb
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: { limit: 10 * 1024, noquotes: true }, // inline files smaller than 10kb
      },
    ],
  },
  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin('dist', {}),
  ],
};
