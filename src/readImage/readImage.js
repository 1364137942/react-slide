/**
 * Created by 子健 on 2016-10-20.
 */
"use strict";

let Promise = require("bluebird");  //bluebird 的promise模块
let fs = Promise.promisifyAll(require("fs"));   //把nodejs原生的fs模块进行promise封装


let readImage = Promise.coroutine(function *(path) {
    let fileHandler = yield fs.readdirAsync(path);
    let list = yield Promise.map(fileHandler, (file) => {
        return {
            src: path.concat("/", file),
            alt: file
        }
    });
    return list;

});

readImage('../image').then((list) => {

    fs.writeFileAsync('Image.json', JSON.stringify(list), {flag: "w+"});
}).catch((err) => {
    console.log(err.stack);
});


