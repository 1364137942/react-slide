/**
 * Created by 子健 on 2016-10-20.
 */
"use strict";

let Promise = require("bluebird");  //bluebird 的promise模块
let fs = Promise.promisifyAll(require("fs"));   //把nodejs原生的fs模块进行promise封装


let readImage = Promise.coroutine(function *(path) {
    let fileHandler = yield fs.readdirAsync(path);
    let list = yield Promise.map(fileHandler, (file) => {
        return path.concat("/", file);
    });
    return list;

});

module.exports = readImage;