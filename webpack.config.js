// webpack配置文件
const path = require('path')
// 入口文件可以是相对路径，但是出口必须是绝对路径
module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 出口文件
  output: {
  // 出口文件路径 
  path: path.join(__dirname, 'dist'),
  // 文件名称
  filename: 'bundle.js'
  },
  // 打包模式 production 打包后代码会压缩 devlopment 代码不会被压缩
  mode: 'development',
  // laoder相关
  module: {
    rules: [
      // 处理css相关文件
      {
        test: /\.css$/,
        // style-loader 将转换完成的css样式挂载到dom元素上
        // css-loader 将css模块转化为css代码
        // 注意：loader的加载方式是由后往前
        use: ['style-loader','css-loader']
      }
    ]
  }
}