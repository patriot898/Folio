const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: `${__dirname}/client/public`,
    filename: 'bundle.js',
  },
  plugins: [
    new CompressionPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
