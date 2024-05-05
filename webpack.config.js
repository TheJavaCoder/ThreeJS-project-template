const path = require('path');

module.exports = {
  entry: './build/typescript/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/js-bin'),
  },
};