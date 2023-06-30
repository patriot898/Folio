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
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};
