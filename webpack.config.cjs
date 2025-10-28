module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|\.test\.jsx?$/,
        use: {
          loader: '@jsdevtools/coverage-istanbul-loader',
          options: { esModules: true }
        },
        enforce: 'post',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};