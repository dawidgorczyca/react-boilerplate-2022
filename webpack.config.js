/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { NODE_ENV = 'production' } = process.env

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  watch: NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  mode: NODE_ENV,
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/index.html'
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    open: true
  },
  // externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }
}
