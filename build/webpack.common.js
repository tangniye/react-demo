const path = require('path')
//html-webpack-plugin 会在打包结束后 会自动生成一个index.html,并把打包生成的js自动引入到html中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    publicPath: './',
    filename: 'js/[name].[hash:5].js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', }),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      // chunks: 'async', chunk只对异步代码生效
      chunks: 'all',
      // minChunks: 1, 最小引入次数，当一个模块至少引入多少次时才会被代码分割
      // maxSize: 50000, 50kb
      // maxAsyncRequests: 5, 超过5个后，不会进行代码分割了
      // maxInitialRequests: 3, 入口文件加载时，入口文件引入的文件最多3个，超过3个后，不会进行代码分割了
      // automaticNameDelimiter: '~', 文件名的链接符
      // name: true, //使得output中chunkFilename的name生效
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10, //值越大，优先级越高
        },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true, 如果一个模块已经被打包过了，会忽略当前打包，而使用之前打包过的模块
        //   name: 'common',
        // },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
