const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  // development: 'cheap-module-eval-source-map'
  // production: 'cheap-module-source-map'
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      { root: path.resolve(__dirname, '../') }
    ),
    new BundleAnalyzerPlugin(),
  ],
}

module.exports = merge(commonConfig, prodConfig)
