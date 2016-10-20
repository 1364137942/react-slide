/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const port = 8000;//浏览器打开端口

function getDefaultModules() {
    return {
        loaders: [{
            test: /\.js/,
            loader: "babel-loader",
            include: srcPath,

        },
            {
                test: /\.css/,
                loader: "style-loader!css-loader",
                include: srcPath
            }]
    }
}
module.exports = {
    srcPath: srcPath,
    publicPath: "/assets/",
    port: port,
    getDefaultModules: getDefaultModules
};