import React, { Component } from 'react';
import Stars from './components/star';
import Placeholder from './components/placeholder';


export default class Components extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render() {
    return (
        <div>
            <h4>Text input</h4><br />
                <Placeholder/>
            <h4>Button</h4>
            <div id='Button'>
                <button>Button</button> 
            </div>
            <h4>Star Stick</h4>
            <div>
                <Stars litNum={this.state.num} totalstarNum={5} set={index => this.setState({ num: index })} />
            </div>
        </div>
    );
}
}