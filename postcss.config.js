let postcssPresetEnv = require('postcss-preset-env');
module.exports={
    plugins:[postcssPresetEnv({
        browsers: 'last 5 version' // 兼容浏览器版本
    })]
}
