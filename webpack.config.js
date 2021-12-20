const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
// module.exports = {
//     // mode: 'development',  // none  development production
//     devtool: 'source-map',
//     // 指定项目打包的入口
//     entry: './src/index.js',
//     output: { // 指定文件输出的目录，默认是dist，输出目录必须是一个绝对路径
//         path: path.resolve(__dirname, 'dist'),
//         filename: "main.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use:['style-loader', 'css-loader']
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html"
//         })
//     ]
// }

module.exports = function (env) {
    console.log(env); // {production: true 或 development: true}
    // 在src文件中可以使用process.env.NODE_ENV，表示当前打包时的node环境里的变量
    // 在这里的时候，process指当前node进程 env代表环境变量 NODE_ENV代表一个key
    // cross-env NODE_ENV=production相当于设置了node环境变量，改变了process.env.NODE_ENV
    console.log(process.env.NODE_ENV, '环境变量'); //没有设置cross-env NODE_ENV=xxx时，为undefined
    return {
        mode: env.production ? 'production' : 'development',  // none  development production
        devtool: 'source-map',
        devServer: {
            port: 8080,
            open: true, // 打包后会自动打开浏览器
        },
        // 指定项目打包的入口
        entry: './src/index.js',
        output: { // 指定文件输出的目录，默认是dist，输出目录必须是一个绝对路径
            path: path.resolve(__dirname, 'dist'),
            filename: "main.js"
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use:['style-loader', { // loader传入参数
                        loader: "css-loader",
                        options: {
                            url:true, // 启用/禁用url解析 url(xxx)
                            import:true, // 是否允许 @import xxx 语法处理
                            modules: false, // 是否允许css模块化 import styles from './index.css',选择器变成hash映射
                            sourceMap:false, // 是否生成sourcemap源码映射
                            esModule:true  // 是否生成es module的模块对象
                        }
                    }]
                },
                {
                    test: /\.less$/,
                    use:['style-loader', 'css-loader','less-loader']
                },
                {
                    test: /\.scss$/,
                    use:['style-loader', 'css-loader','sass-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                // JSON.stringify =》 '"' + process.env.NODE_ENV + '"'， 不加""相当于取的是变量，应该是字符串
                'xxx': JSON.stringify(process.env.NODE_ENV), // 设置在模块内xxx = process.env.NODE_ENV
            })
        ]
    }
}
