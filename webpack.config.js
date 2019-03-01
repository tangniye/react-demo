const path = require('path')
//html-webpack-plugin 会在打包结束后 会自动生成一个index.html,并把打包生成的js自动引入到html中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  // development: 'cheap-module-eval-source-map'
  // production: 'cheap-module-source-map'
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: '[name]/[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    hot: true,
    hotOnly: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', }),
    new CleanWebpackPlugin([
      'dist'
    ]),
  ],
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
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
      {
        test: /\.(jpe?g|svg|png|gif)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:5].[ext]',
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[hash:5].[ext]'
        }
      }
    ]
  }
}
