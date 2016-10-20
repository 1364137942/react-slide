/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
const path = require("path");
const args = require("minimist")(process.argv.slice(2));
let config = require(path.join(__dirname, 'cfg/' + args.env));
module.exports = config;

const open = require("open");   //打开浏览器
open('http://localhost:' + config.port + '/webpack-dev-server/');