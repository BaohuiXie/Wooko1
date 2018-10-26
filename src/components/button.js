import React, { Component } from 'react';
import buttonStyles from './button.style';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const {identifier, onclick} = this.props;
        return(
            this.selecter(identifier,onclick)
        );
    }

    selecter(identify,onclick){
        if(identify==='signUp'){
            <button style={buttonStyles.signupButton} onClick={onclick}>Signup</button>
        }
        <button  style={buttonStyles.chatButton} onClick={onclick} >Send</button>
    }
}
