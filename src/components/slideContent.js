/**
 * Created by 子健 on 2016-10-20.
 */
"use strict";
let React = require('react');
let slideContent = require("./readImage");
slideContent('../image').then((list) => {
    console.log(list);
}).catch((err) => {
    console.log(err.stack);
});
class SlideContent extends React.Component{
    construct(){

    }
    render(){
        return(
            <div>
                ALI
            </div>
        )
    }
}
module.exports = SlideContent;