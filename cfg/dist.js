/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
let path = require("path");
let webpack = require("webpack");

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
   entry: path.join(__dirname, '../src/index'),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),    //压缩
        new webpack.optimize.OccurenceOrderPlugin(),  //根据模块引用频率，来调整模块顺序，定义模块id，引用频率越高，id越短，增加加载速度
        new webpack.optimize.AggressiveMergingPlugin(), //优化代码，合并相似部分，提取公共部分
        new webpack.optimize.DedupePlugin(),  //检测相似文件，合并时去除冗余
    ],
    module: defaultSettings.getDefaultModules()
});

module.exports = config;