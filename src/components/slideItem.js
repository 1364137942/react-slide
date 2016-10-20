/**
 * Created by 子健 on 2016-10-20.
 */
let React = require('react');
class SlideItem extends React.Component{
    render(){
        return(
            <li>
                <img src={this.props.item} alt={this.props}/>
            </li>
        )
    }
}
module.exports = SlideItem;