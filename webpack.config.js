/**
 * Created by ronchow on 2017/2/25.
 */
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

  // context: __dirname,

  entry: {
    app: './app/app.jsx' //webpack模块打包的入口文件
  },

  output: {
    path: path.resolve(__dirname, "dist"), //打包后的文件存放的地方（用 node.js 的 path module生成绝对路径）
    publicPath: '/dist/', // 输出解析文件的目录，url 相对于 HTML 页面
    filename: '[name].js' //打包后输出文件的文件名
  },

  devtool: "source-map", // 在浏览器的devtool中能查看到scss文件等详细信息

  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true, //文件通过gzip压缩
    port: 3000, //设定端口
    inline: true,
    hot: true,
    // stats: "errors-only", //在terminal仅显示错误信息
    proxy: {
      "/api": {
        target: "https://cnodejs.org/api/v1/",
        secure: false, //让代理能访问未有证书的https
        pathRewrite: {"^/api" : ""},
        bypass: function(req) {
          if(req.url === "/api/nope") {
            return "/index.html";
          }
        }
      }
    }
  },

  module: {
    rules: [
      // 通过ExtractTextPlugin插件生成独立的css文件 app.css， 可以在html文件独立于app.js单独引用。（减少app.js文件大小， 并能让css文件独立引用）
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', "stage-0", 'react']
            }
          }
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', "stage-0", 'react']
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        include: /(app)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        include: /(app)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]

  },

  plugins: [
    //生成独立文件 app.css
    new ExtractTextPlugin({
     filename: 'app.css'
    })
  ]

};