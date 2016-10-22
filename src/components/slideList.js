/**
 * Created by 子健 on 2016-10-20.
 */
let React = require("react");
let SlideItem = require("./slideItem");
let Images = require("../readImage/Image.json");

class SlideList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex: 0
        };
        this.count = Images.length + 1;
        this.transition = "all 0.8s linear";
    }
    turn(n){
        let _n = this.state.curIndex + n;
        if(_n == this.count){
            this.transition = "none";
        }else{
            this.transition = "all 0.8s linear";
        }
        if(_n < 0){
            _n = _n + this.count;
        }

        if(_n >= this.count){
            _n = _n - this.count;
        }
        this.setState({curIndex: _n});
    }
    goplay(){
        setInterval(() => {
            this.turn(1);
            // console.log(this.state.curIndex);
        },1000);
    }
    componentDidMount(){
        this.goplay();
    }
    render(){
        let ImageLi = [];
        // let count = Images.length;
        // let left =
        Images.forEach((item, i) => {
           ImageLi.push(<SlideItem key={i} item={item} count={this.count}/>);
        });
        ImageLi.push(<SlideItem key={this.count - 1} item={Images[0]} count={this.count}/>);
        let width = this.props.width * (this.count);
        return(
            <ul id="banner" style={{width: width,position: 'relative',top: 0, left: '-800' * this.state.curIndex + 'px', transition: this.transition}}>
                {ImageLi}
            </ul>
        )
    }
}
module.exports = SlideList;