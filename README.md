# webpack-use
webpack基本配置
## 核心概念
- webpack的默认配置文件是`webpack.config.js`
- 入口：指示webpack应该从哪个文件开始打包，用来作为内部依赖图构建的起点
    - 在webpack5里面如果没有配置，默认入口文件是src/index.js
- loader
    - webpack在默认情况下只能处理js和json文件
    - 要想引入其他类型的文件，比如css文件，需要对原文件进行加载和转译，转成js
    - 比如处理css文件['style-loader','css-loader'],从右向左执行
    - 1. 先读取源文件index.css
    - 2. 把文件内容传给css-loader，css-loader可以处理css中的@import和url语法，处理完之后会把内容传递给style-loader
    - 3. style-loader的作用是把css转换成style标签插入到页面里
- 插件：插件是一个类，通过new产生实例，new的时候可传入参数
- mode，代表当前编译的环境：none未指定， production生产环境，webpack会针对构建结果进行生产环境的优化，比如压缩文件，development开发环境，不会进行压缩
    - 如何动态设置不同的环境
    -  --mode用来设置模块内（根据入口编译的js模块）的process.env.NODE_ENV
         - webpack会在编译的时候把process.env.NODE_ENV替换成环境字符串,在生产环境中没有process.env.NODE_ENV变量
    -  --env用来设置webpack配置文件的函数参数
        - 在webpack.config.js文件中，配置时判断环境，进行动态配置
    -  cross-env(跨平台设置环境变量)用来设置node环境的process.env.NODE_ENV
        - cross-env NODE_ENV=xxx 相当于设置了node环境变量，改变了process.env.NODE_ENV
    -  DefinePlugin用来设置模块内的全局变量,相当于进行模块内的字符串替换
    - mode的优先级：默认是production < 配置文件（webpack.config.js中的mode）< package中的命令传参
