const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/',
    clean: true,
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
              plugins: [
                'babel-plugin-styled-components',
                isDev && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: !isDev && {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
    }),

    new CleanWebpackPlugin(),

    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
    minimize: !isDev,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
