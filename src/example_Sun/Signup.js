import React, { Component } from 'react';
import '../App.css';
import image from '../picture/logo.JPG';
import TextInput from '../components/text_input';
const axios = require('axios');

class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    signUp(){
        let is_email_valid = this._email_text_input_ref.validate();
        let is_password_valid = this._password_text_input_ref.validate();
        let is_password_confirm_valid = this._password_confirmation_text_input_ref.validate();
        let is_name_valid = this._name_text_input_ref.validate();
        if (
            is_email_valid &&
            is_password_valid &&
            is_password_confirm_valid &&
            is_name_valid
        ) {
            alert('signup success!');
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
                        <img src={image} alt="Cumpus Cloud Logo" height="60" width="60"/>
                        <TextInput
                            ref={this._emailTextInputRef}
                            placeholder="Email"
                            onChangeText={(text) => {
                                this.setState({email: text});
                            }}
                            validations={[validateExistence, validateEmail]} />
                        <TextInput
                            ref={this._passwordTextInputRef}
                            placeholder="Password"
                            onChangeText={(text) => {
                                this.setState({password: text});
                            }}
                            validations={[validateExistence, validatePassword]} />
                        <TextInput
                            ref={this._passwordConfirmationTextInputRef}
                            placeholder="Password Confirmation"
                            onChangeText={(text) => {
                                this.setState({passwordConfirm: text});
                            }}
                            validations={[validateExistence, validatePasswordConfirm.bind(null, this.state.password)]} />
                        <TextInput
                            ref={this._nameTextInputRef}
                            placeholder="Name"
                            onChangeText={(text) => {
                                this.setState({name: text});
                            }}
                            validations={[validateExistence, validateName]} />
                        <button type='button' onClick={this.signUp.bind(this)}>Signup</button>
                    </div>
                </div>
            </div>
        );
    }

    _emailTextInputRef = (ref) => {
        this._email_text_input_ref = ref;
    }
    _passwordTextInputRef = (ref) => {
        this._password_text_input_ref = ref;
    }
    _passwordConfirmationTextInputRef = (ref) => {
        this._password_confirmation_text_input_ref = ref;
    }
    _nameTextInputRef = (ref) => {
        this._name_text_input_ref = ref;
    }
}

function validateExistence(text) {
    if (text) {
        return "";
    } else {
        return "Required";
    }
}

function validateEmail(text) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(text).toLowerCase())) {
      return "Invalid email format";
    } else {
      return "";
    }
}
  
function validatePassword(text) {
    if(text.length<6 || text.length>15){
        return "Must be longer than 6 and shorter than 15";
    }
    return "";
}
  
function validatePasswordConfirm(confirmation, text) {
    if(text===confirmation){
        return "";
    }
    return "Password and confirmation do not agree";
}
  
function validateName(text) {
    if(text.length>20){
        return "Must be shorter than 20";
    }
    return "";
}

export default SignupPage;
JSON.stringify;