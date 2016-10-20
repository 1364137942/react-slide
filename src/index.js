/**
 * Created by 子健 on 2016-9-26.
 */
"use strict";
import "./style.less";
let React = require("react");
let ReactDom = require("react-dom");

let SlideContent = require("./components/slideContent");
ReactDom.render(
    <section id="container">
        <SlideContent/>
    </section>,
    document.getElementById('app')
);