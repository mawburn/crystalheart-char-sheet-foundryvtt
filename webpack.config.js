const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'chswade.css',
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'assets') },
    //   ],
    // }),
    new ESLintPlugin({
      extensions: ['.ts'],
      exclude: 'node_modules',
    }),
  ],
}
