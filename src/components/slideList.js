/**
 * Created by 子健 on 2016-10-20.
 */
// let React = require("react");
let SlideItem = require("./slideItem");
let SlideDots = require("./slideDots");
let SlideArrow = require("./slideArrow");
let Images = require("../Image.json");
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
    turn(n, type){
        let _n;
        type = type || null;
        switch (type){
            case null:
                _n = this.state.curIndex + n;
                break;
            case "dots":
                _n = n;
                break;
            case "arrow":
                //arrow时需要注意，因为为了要循环播放，所以图片数目会比总数多一，所以需要在第一张和最后一张（实际时同一张图），以及倒数第二张（用户看到的最后一张）限制操作
                if(((this.state.curIndex === 0 || this.state.curIndex === this.count - 1) && n == -1) || (this.state.curIndex === this.count - 2 && n == 1)){
                    return;
                }else{
                    _n = this.state.curIndex + n;
                }
                break;
            default: return;
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

    }
    goplay(){
        this.time = setInterval(() => {
            this.turn(1);
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
        Images.forEach((item, i) => {
           ImageLi.push(<SlideItem key={i} item={item} count={this.count}/>);
        });
        ImageLi.push(<SlideItem key={this.count - 1} item={Images[0]} count={this.count}/>);
        let width = this.props.width * (this.count);
        return(
            <section id="container" onMouseOver={this.pause.bind(this)} onMouseOut={this.goplay.bind(this)}>
                <ul id="banner" style={{width: width,position: 'relative',top: 0, left: '-800' * this.state.curIndex + 'px', transition: this.transition}}>
                    {ImageLi}
                </ul>
                <SlideArrow turn={this.turn.bind(this)}/>
                <SlideDots count={this.count - 1} turn={this.turn.bind(this)} nowLocal={this.state.curIndex === (this.count - 1) ? 0 : this.state.curIndex}/>
            </section>

        )
    }
}
module.exports = SlideList;