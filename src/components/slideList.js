/**
 * Created by 子健 on 2016-10-20.
 */
let React = require("react");
let SlideItem = require("./slideItem");
let Images = require("../readImage/Image.json");

class SlideList extends React.Component{
    render(){

        return(
            <ul>
                <SlideItem item={Images[0].src}/>
            </ul>
        )
    }
}
module.exports = SlideList;