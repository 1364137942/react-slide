/**
 * Created by 子健 on 2016-10-24.
 */
"use strict";
let React = require("react");
class SlideArrow extends React.Component{
    handleArrowClick(i){
        this.props.turn(i, "arrow");
    }
    render(){
        return(
            <div id="slide-arrow-box">
                <span
                    className="slide-arrow slide-arrow-left"
                    onClick={this.handleArrowClick.bind(this, -1)}
                >
                    &lt;
                </span>
                <span
                    className="slide-arrow slide-arrow-right"
                    onClick={this.handleArrowClick.bind(this, 1)}
                >
                    &gt;
                </span>
            </div>
        )
    }
}
module.exports = SlideArrow;