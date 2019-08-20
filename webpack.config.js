// webpack配置文件
// 引入webpack的html插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
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
      },
      // 处理less相关文件
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      // 处理图片相关文件
      {
      // 配置图片的加载规则
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // url-loader图片的大小不能超过8kb
              // 如果图片大于8kb，交给file-loader
              // 如果使用url-loader,理解为url-loader依赖于file-loader
              limit: 8 * 1024
            }
          }
        ]
      },
      {
        // 音乐相关
        test: /\.(video|audio)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // url-loader图片的大小不能超过8kb
              // 如果图片大于8kb，交给file-loader
              // 如果使用url-loader,理解为url-loader依赖于file-loader
              limit: 8 * 1024
            }
          }
        ]
      },
      {
        // 配置字体图标文件
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // 插件相关
  plugins: [
    new HtmlWebpackPlugin({
      // 生成的html页面的模板
      template: path.join(__dirname, 'src', 'index.html')
    }),
    // 热更新替换插件
    new HotModuleReplacementPlugin()
  ],
  // webpack-dev-server的配置
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 9999,
    // 开启了webpack的热更新， 只会更新修改的部分
    hot: true
  }
}