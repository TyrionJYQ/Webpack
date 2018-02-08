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
            loader: 'style-loader',
            options: {
              attrs: {
                first: 1
              },
              singleton: true,
              insertAt: 'top',
              insertInto: '#app'
            },
            
            
          },
          {
            loader: 'css-loader'
            
          }
        ]
      }
    ]
  }
}