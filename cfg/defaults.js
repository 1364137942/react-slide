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
            loader: "babel-loader?presets[]=es2015&presets[]=react",
            include: srcPath,

            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader",
                include: srcPath
            },
            {
                test: /\.less/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svgs)$/,
                loader: 'url-loader?limit=8192'
            }
        ]

    }
}
module.exports = {
    srcPath: srcPath,
    publicPath: "/assets/",
    port: port,
    getDefaultModules: getDefaultModules
};