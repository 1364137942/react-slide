/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
let webpack = require("webpack");
let path = require('path');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
   entry: [
       //注释部分是使用配置文件配置webpack-dev-server参数，我这里使用的是命令行传参数
       // 'webpack-hot-middleware/client?http://127.0.0.1:' + defaultSettings.port,
       // 'webpack/hot/only-dev-server',
       'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
       'webpack/hot/only-dev-server',
       './src/index',

   ],
    cache: false,
    // devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    externals: {
        "react2": 'React',
        'react-dom2': 'ReactDOM'
    },
    module: defaultSettings.getDefaultModules()
});
//解决json-loader抽风问题2：让处理json文件的loader在此处配置
/*config.module.loaders.push(
    {
        test: /\.(js|jsx)/,
        loader: "react-hot-loader/webpack!babel-loader?presets[]=es2015&presets[]=react",
        include: path.join(__dirname, '/../src'),
    }
);
config.module.loaders.push(
    {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(__dirname, '/../src')
    }
);*/
//解决json-loader抽风问题2：include 用数组
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'react-hot-loader/webpack!babel-loader?presets[]=es2015&presets[]=react',
    include: [].concat(
        [ path.join(__dirname, '/../src') ]
    )
});
module.exports = config;