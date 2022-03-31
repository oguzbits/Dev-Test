const path = require('path');

module.exports = {
  entry: {
    'toPositiveTemporal/toPositiveTemporal.ts': './toPositiveTemporal/toPositiveTemporal.ts',
    'extractDates/extractDates.ts': './extractDates/extractDates.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};