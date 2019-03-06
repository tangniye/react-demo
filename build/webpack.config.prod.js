const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
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
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: 'css/[name].[hash:5].chuck.css',
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  }
}

module.exports = merge(commonConfig, prodConfig)
