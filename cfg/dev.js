/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
let webpack = require("webpack");

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
   entry: [
       //注释部分是使用配置文件配置webpack-dev-server参数，我这里使用的是命令行传参数
       // 'webpack-hot-middleware/client?http://127.0.0.1:' + defaultSettings.port,
       // 'webpack/hot/only-dev-server',
       './src/index'
   ],
    cache: false,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: defaultSettings.getDefaultModules()
});

module.exports = config;