/**
 * Created by 子健 on 2016-9-26.
 */
'use strict';
let path = require("path");
let defaultSettings = require("./defaults");

module.exports = {
    port: defaultSettings.port,
    output: {
        path: path.join(__dirname, '../dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: './src/',
        hot: true,
        port: defaultSettings.port,
        inline: true,
        process: true,
        colors: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {}
};