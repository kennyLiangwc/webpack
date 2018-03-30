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

#### entry（一般配置webpack 打包入口，一般只需要配置）
  - 可配置一个具体的路径，可配置一个数组路径
  
#### output（webpack出口的配置）
  - filename 打包后的文件名称
  - path 打包输入的绝对路径
  - pathinfo 告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释，配置为Boolean值
  - publicPath 此选项指定在浏览器中所引用的「此输出目录对应的公开 URL，webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。
  - chunkFilename 非主入口的文件名,设置chunk文件的文件名
---

#### module(配置如何处理项目中不同的模块)
  -rules 匹配规则的数组
  
  数组里为匹配的每一个对象
```
    {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
            presets: ['env']
        }
    }
```
  - test用正则匹配需要解析的文件
  - loader用哪个loader来解析
  
      1)webpack的loader的配置是从右到左
  
      2)css-loader {loader: "style-loader!css-loader"} 先使用css-loader之后使用style-loader,同理如需配置less,{loader: "style-loader!less-loader"}
  -options loader的选项,解析js时，会到.babelrc中查找插件
  
---
#### resolve（配置模块如何被解析）
 - alias 配置可以使引入变简单
 ```
    配置前:
    import TTT from '../../t/t.js'

    resolve: {
        alias: {
            TTT: path.resolve(__dirname,'src/t')
        }
    }

    配置后:
    import TTT from 't/t.js'
 ```
 
 - extensions 自动解析确定的扩展
  ```
    resolve: {
        extensions: ['.js','.json','.vue'];
    }
    引入文件时即可省略js,json,vue等后缀名
  ```

#### plugins(插件)
```
    plugins: [
        new xxxxx
    ]
```
