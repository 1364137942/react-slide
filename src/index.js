/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
import "./style.less";
const ReactDom = require("react-dom2");
const React = require("react2");
let SlideContent = require("./components/slideContent");
ReactDom.render(
    <SlideContent/>,
    document.getElementById('app')
);