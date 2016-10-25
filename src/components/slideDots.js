/**
 * Created by 子健 on 2016-10-24.
 */
"use strict";
// let React = require("react");
class SlideDots extends React.Component{
    handleDotClick(i){
        this.props.turn(i, "dots");
    }
    render(){
        let dotNodes = [];
        let {count, nowLocal} = this.props;
        for(let i = 0; i < count; i++){
            dotNodes.push(<span
                key={'dot' + i}
                className={"slide-dot " + ((i === nowLocal) ? "slider-dot-selected" : "")}
                onClick={this.handleDotClick.bind(this, i)}
            >
            </span>)
        }

        return (
          <div id="slide-dot-box">
              {dotNodes}
          </div>
        );
    }
}
module.exports = SlideDots;