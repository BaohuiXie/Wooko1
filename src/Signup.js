import React, { Component } from 'react';
import './App.css';
import image from './picture/logo.JPG';
import TextInpute from './components/text_input';
import Button from './components/button';
const axios = require('axios');

class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
        };
    }

    signUp(event){ 
        let validEmail = this.emailRef.validate();
        let validName = this.nameRef.validate();
        let validPassword = this.passwordRef.validate();
        let validatePasswordConfirm = this.passwordCONFIRMERef.validate();
        if(validEmail&&validName&&validPassword&&validatePasswordConfirm){
            alert('signup success!')
            axios.post('https://jsonplaceholder.typicode.com/users',{
                "data":{
                    "email":this.state.email,
                    "password":this.state.password,
                    "name":this.state.name,
                }
            }).then((response) => {
                console.log(response);
            });
        }
    }
    
    render(){
        return(
            <div id="main">
                <div id='header'><h1>Signup</h1><hr/></div>
                <div id='page'>
                    <div id='signupBox'>
                        <img src={image} alt="Campus Cloud Logo" height="60" width="60"/>
                        <TextInpute 
                            placeholder="Email"
                            ref={(ref) => {
                                this.emailRef = ref;
                            }}
                            type='email'
                            on_Changed={(event)=>{
                                this.setState({Email: event})
                            }}
                            validations={[validateExistence, validateEmail]}/>
                        <TextInpute
                            placeholder="Password"
                            ref={(ref) => {
                                this.passwordRef = ref;
                            }}
                            type='password'
                            on_Changed={(event)=>{
                                this.setState({password: event})
                            }}
                            validations={[validateExistence, validatePassword]}/>
                        <TextInpute
                            placeholder="Password Confirmation"
                            ref={(ref) => {
                                this.passwordCONFIRMERef = ref;
                            }}
                            type='password'
                            on_Changed={(text)=>{
                                this.setState({passwordconfirm: text})
                            }}
                            validations={[validateExistence, validatePasswordConfirm.bind(null,this.state.password, this.state.passwordconfirm)]}/>
                        <TextInpute
                            placeholder="Name"
                            ref={(ref) => {
                                this.nameRef = ref;
                            }}
                            type='text'
                            on_Changed={(event)=>{
                                this.setState({name: event})
                            }}
                            validations={[validateExistence, validateName]}/>
                        {/* <Button 
                            identifier="signUp" 
                            onclick={this.signUp.bind(this)}
                        /> */}
                        <button type='button' onClick={this.signUp.bind(this)}>Signup</button>
                    </div>
                </div>
            </div>
        );
    }
}

function validateExistence(event){
    if(event){
        return "";
    }else{
        return "Require Input";
    }
}

function validateEmail(event){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(event).toLowerCase())){
        return "The Email is not valid";
    }else{
        return "";
    }
}


function validateName(event){
    if(event.length>20){
        return "The name is not valid, Must be shorter than 20";
    }else{
        return "";
    }
}


function validatePassword(event){
    if(event.length<6 || event.length>15){
        return "The password is not valid";
    }else{
        return ""
    }
}


function validatePasswordConfirm(confirmation, text) {
    if(text===confirmation){
        return "";
    }
    return "Password and confirmation do not agree";
}
export default SignupPage;