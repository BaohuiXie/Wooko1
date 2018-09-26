import React, {Component} from 'react';
import shiningstar from '../star.png';
import emptystar from "../star_empty.png";

export  class Star extends Component {
    render(){
        const { identyifemptStar, index, go } = this.props;
        return  <img src={identyifemptStar ? shiningstar :emptystar } onClick={()=>go(index)} alt={identyifemptStar ? "shining_star" : "empt_star"} height={20} width={20} />          
    }
}


export default class Stars extends Component {
    renderStars(startNum) {
        let starComponents1 = [];

        for (let i = 1; i <= startNum; i++) {
            starComponents1.push(<Star
                key={i}
                index={i}
                identyifemptStar={this.props.litNum >= i}
                go={this.props.gooooo}
            />)
        }
        return starComponents1;
    }

    render(){
        const { totalstarNum } = this.props;
      
        return this.renderStars(totalstarNum);
    }


}



