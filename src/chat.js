import React, { Component } from 'react';
import imag from './picture.png';
import * as firebase from 'firebase';
import {storage} from './index';
import "./chat.css";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textarray: [],
            url:[],
        };
        this.listenToMESSAGE();
        this.listenToImage.bind(this);
    }

    onChangeText(event) {
        return (
            this.setState({
                text: event.target.value,
            })
        );
    }

    sendText = (event) => {
        writeTESTtoFIREBASE(this.state.text)
        this.state.text && this.setState({text:''})
    }


    listenToMESSAGE() {
        this.text_array = [];
        var messageLisener = firebase.database().ref('messages');
        messageLisener.on('child_added', (data) => {
            // console.log(data.key);
            // console.log(data.val().text);
            this.text_array.push(data.val().text)
            this.setState({textarray: this.text_array});
        })
    }

    handleChange(event){
        writeIMAGEtoFIREBASE( event.target.files[0])
        this.state.selectedImage && this.setState({selectedImage:null})
    }

    sendImage = () => {
        writeIMAGEtoFIREBASE(this.state.selectedImage)
        this.state.selectedImage && this.setState({selectedImage:null})
    }

    listenToImage(){
        this.url_array = [];
        var storageRef = storage.ref();
        var imagesRef = storageRef.child('images/abc.jpg');
        imagesRef.getDownloadURL().then(function(url) {
            this.url_array.push(url)
            this.setState({url: this.url_array});
        })
    }

// change->send->listen
    render() {
        return (
            <div>
                <h1 id='title'>Chat</h1><hr />
                <div id='messageBlock'>
                    {this.state.textarray.map((val, index) => [<p key={index}>{val}</p>, <br key={index} />])}
                    {this.state.url.map((val2,index)=>[<img key={index} src={val2}/>])}
                    <div id='buttonAndinput'>
                        <input value={this.state.text} type='text' placeholder='TextLine'
                            onChange={this.onChangeText.bind(this)}/>
                        <button className='button' onClick={this.sendText} >Send</button>
                        <img src={imag} onClick={ ()=>this.fileInput.click()} height='30px' width='30px'/>
                        <input type='file' 
                        onChange={this.handleChange.bind(this)} 
                        style={{display: 'none'}} 
                        ref={fileInput =>this.fileInput=fileInput}/>
                        {/* <button className='button' onClick={this.sendImage}>UploadImage</button>  */}
                    </div>        
                </div>
            </div>
        );
    }
}


function writeTESTtoFIREBASE(text) {
    firebase.database().ref('messages').push({
        text: text,
    });
}

function writeIMAGEtoFIREBASE(selectedImage){
    firebase.storage().ref('images/abc.jpg').put(selectedImage);
    console.log(selectedImage);
}



//   function writeNewPost(uid, username, picture, title, body) {
//     // A post entry.
//     var postData = {
//       author: username,
//       uid: uid,
//       body: body,
//       title: title,
//       starCount: 0,
//       authorPic: picture
//     };

//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('posts').push().key;

//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//     return firebase.database().ref().update(updates);
//   }