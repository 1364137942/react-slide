/**
 * Created by 子健 on 2016-10-20.
 */
let React = require("react");
let SlideItem = require("./slideItem");
let Images = require("../readImage/Image.json");
let SlideDots = require("./slideDots");

class SlideList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex: 0
        };
        this.count = Images.length + 1;
        this.transition = "all 0.8s linear";
        this.time = null;
    }
    turn(n, dots){
        let _n;
        if(dots){
            _n = n;
            this.pause();
        }else {
            _n = this.state.curIndex + n;
        }
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
        if(this.time == null){
            this.goplay();
        }
    }
    goplay(){
        this.time = setInterval(() => {
            this.turn(1);
            // console.log(this.state.curIndex);
        },1000);
    }
    pause(){
        clearInterval(this.time);
        this.time = null;
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
            <section id="container">
                <ul id="banner" style={{width: width,position: 'relative',top: 0, left: '-800' * this.state.curIndex + 'px', transition: this.transition}}>
                    {ImageLi}
                </ul>
                <SlideDots count={this.count - 1} turn={this.turn.bind(this)} nowLocal={this.state.curIndex === (this.count - 1) ? 0 : this.state.curIndex}/>
            </section>

        )
    }
}
module.exports = SlideList;