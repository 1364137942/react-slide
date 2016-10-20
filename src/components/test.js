/**
 * Created by 子健 on 2016-10-20.
 */
"use strict";
let slideContent = require("./readImage");
slideContent('../image').then((list) => {
    console.log(list);
});