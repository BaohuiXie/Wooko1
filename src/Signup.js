import React, { Component } from 'react';
import './App.css';
import image from './logo.JPG'
const axios = require('axios');

class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            email:"",
            password:'',
            passwordConfirm:'',
            name:'',
            is_email_valid: true,
            is_Name_valid: true,
            is_passwordConfirm_valid: true,
            is_password_valid: true
        };
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(){
        if(this.state.password.length<6 || this.state.password.length>15){
            return false;
        }
        return true;
    }

    validatePasswordConfirm(){
        if(this.state.password===this.state.passwordConfirm){
            return true;
        }
        return false;
    }

    validateName(){
        if(this.state.name.length>20){
            return false;
        }
        return true;
    }

    updateInputEmailValue(event){ 
        return(
            this.setState({
            email:event.target.value,
            })
        );
    }

    updateInputPasswordValue(event){ 
        this.setState({
            password:event.target.value,
        })
    }

    updateInputPasswordConfirmValue(event){ 
        this.setState({
            passwordConfirm:event.target.value,
        })
    }

    updateInputNameValue(event){ 
        this.setState({
            name:event.target.value,
        })
    }

    signUp(event){ 
        if (this.validateEmail(this.state.email)){ 
            if(this.validatePassword()){
                if(this.validatePasswordConfirm()){
                    if(this.validateName()){
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
                    }else{
                        this.setState({is_Name_valid: false});
                    }
                }else{
                    this.setState({is_passwordConfirm_valid: false});
                }
            }else{
                this.setState({is_password_valid: false});
            }
        }else{
            this.setState({is_email_valid: false});
        }
    }
    
    render(){
        return(
            <div id="main">
                <div id='header'><h1>Signup</h1><hr/></div>
                <div id='page'>
                    <div id='signupBox'>
                        <img src={image} alt="Cumpus Cloud Logo" height="60" width="60"/>
                        <input value={this.state.email} onChange={this.updateInputEmailValue.bind(this)} type='email' placeholder='Email'/><br/>
                        {this.state.is_email_valid? null : <div className='hidden'><p>Not valid Email</p></div>}
                        <input value={this.state.password} onChange={this.updateInputPasswordValue.bind(this)} type='password' placeholder='Password'/><br/>
                        {this.state.is_password_valid? null : <div className='hidden'><p>Not valid Password</p></div>}
                        <input value={this.state.passwordConfirm} onChange={this.updateInputPasswordConfirmValue.bind(this)} type='password' placeholder='Password Conformation'/><br/>
                        {this.state.is_passwordConfirm_valid? null : <div className='hidden'><p>Password is different</p></div>}
                        <input value={this.state.name} onChange={this.updateInputNameValue.bind(this)} type='text' placeholder='Name'/><br/>
                        {this.state.is_Name_valid? null : <div className='hidden'><p>Name is not valid</p></div>}
                        <button type='button' onClick={this.signUp.bind(this)}>Signup</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;
JSON.stringify;