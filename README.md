# webpack

### webpack 总结
  webpack 是一个JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
  
### webpack 的核心配置有entry,output,module,resolve,plugins等

---
```
const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
    mode: "development",        //指定打包模式
    entry: 'src/index.js',      //入口 指定webpack打包入口 `webpack4` 不一定要配置，默认src/index.js 
    output: {                   //出口 可配置webpack打包生成的路径,生成文件的名称,chunkhash文件等 webpack4 不一定要配置，默认生成dist/main.js
        filename: 'entry.bundle.js'
    },
    module: {                   // 模块 一般配置解析loader
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                options: { 
                    presets: ["env"]
                }
            }
        ]
    },
    resolve: {                    //告诉webpack怎样解析
        extensions: ['.js','.vue','json']
    },
    plugins: [          //插件
        new HtmlWebpackPlugin()
    ]
 }   
```
  
---
