const path = require('path')
//html-webpack-plugin 会在打包结束后 会自动生成一个index.html,并把打包生成的js自动引入到html中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/index.js',
  },
  output: {
    filename: '[name]/[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', }),
    new CleanWebpackPlugin([
      'dist'
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css|scss?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.jpeg|jpg|png|svg|gif?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: 'assets/img/[name].[hash:5].[ext]',
          }
        }
      },
      {
        test: /\.eot|svg|ttf|woff|woff2?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/icons/[name].[hash:5].[ext]'
        }
      }
    ]
  }
}
