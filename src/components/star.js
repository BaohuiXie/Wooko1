import React, {Component} from 'react';
import shiningstar from '../picture/star.png';
import emptystar from "../picture/star_empty.png";

export  class Star extends Component {
    render(){
        const { identyifemptStar, index, showstar } = this.props;
        return  <img src={identyifemptStar ? shiningstar :emptystar } onClick={()=>showstar(index)} alt={identyifemptStar ? "shining_star" : "empt_star"} height={20} width={20} />          
    }
}

export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfStar:0,
        };
    }
    renderStars(startNum) {
        let starComponents = [];
        for (let i = 0; i < startNum; i++) {
            starComponents.push(<Star
                key={i}
                index={i}
                identyifemptStar={this.state.numOfStar>=i}
                showstar={this.showStar}
            />)
        }
        return starComponents;
    }

    render(){
        const { totalstarNum } = this.props;
        return this.renderStars(totalstarNum);
    }

    showStar = (litNum) => {
        this.props.showstars && this.props.showstars(litNum);
        this.setState({numOfStar: litNum});
    }


}



