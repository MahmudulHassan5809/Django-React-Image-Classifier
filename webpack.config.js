module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            {
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
        ]
      }
    ]
  }
}
