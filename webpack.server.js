const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')
const serverConfig = {
  target: 'node', // 打包server的代码
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') // 将打包后的bundle.js放到根目录下的build
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: { localIdentName: '[name]_[local]_[hash:base64:5]' }
        }
      }]
    }]
  }
}

module.exports = merge(config, serverConfig)