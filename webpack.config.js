const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg|jpeg|png|svg|gif?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: 'assets/[name].[hash:5].[ext]',
          }
        }
      },
    ]
  }
}
