const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public') // 打包前端代码放到public下
  }
}

module.exports = merge(config, clientConfig)