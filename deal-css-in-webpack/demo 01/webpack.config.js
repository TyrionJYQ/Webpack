var path = require('path')
module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          {
            // loader: 'style-loader'
            loader: 'style-loader/url'
          },
          {
            // loader: 'css-loader'
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}