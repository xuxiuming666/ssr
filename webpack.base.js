module.exports = {
  module: {
    rules: [{ // 配置规则 
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node-modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]] //编译规则
      }
    }]
  }
}