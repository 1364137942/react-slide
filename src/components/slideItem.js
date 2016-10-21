/**
 * Created by 子健 on 2016-10-20.
 */
let React = require('react');
class SlideItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let {item, count} = this.props;
        let width = 100 / count + "%";
        return(
            <li style={{width: width}}>
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }
}
module.exports = SlideItem;