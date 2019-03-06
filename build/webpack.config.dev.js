const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  // development: 'cheap-module-eval-source-map'
  // production: 'cheap-module-source-map'
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  }
}

module.exports = merge(commonConfig, devConfig)
