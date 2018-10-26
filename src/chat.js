import React, { Component } from 'react';
import imag from './picture/picture.png';
import * as firebase from 'firebase';
import { storage } from './index';
import "./chat.css";
const uuidv4 = require('uuid/v4');
// import uuidv4 from 'uuid/v4';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            message: [],
            url: '',
        };
        this.listeningMessage()
        // this.listenToImage();
    }

    onChangeText(event) {
        return (
            this.setState({
                text: event.target.value,
            })
        );
    }


    sendText = () => {
        firebase.database().ref('message').push({
            content: this.state.text,
            type: 'text'
        })
        this.state.text && this.setState({ text: '' })
    }


    listeningMessage() {
        this.text_array = [];
        var messageLisener = firebase.database().ref('messages');
        messageLisener.on('child_added', snapshot => {
            const val = snapshot.val();
            this.setState({ message: [...this.state.message, val] })
        })
    }

    sendImage = (evt) => {
        const selectedImage = evt.nativeEvent.target.files[0];
        const random = uuidv4();
        const img_ref = firebase.storage().ref('images/' + random)
        const upload_task = img_ref.put(selectedImage);

        upload_task.on(firebase.storage.TaskEvent.STATE_CHANGED, null, null, () => {
            img_ref.getDownloadURL().then(url => {
                firebase.database().ref('message').push({
                    content: url,
                    type: 'image'
                })
            })
        })
        this.state.selectedImage && this.setState({ selectedImage: null })
    }


    scrollToBottom() {
        this.message.scrollToBottom({ behavior: 'smooth' });
    }

    // change->send->listen
    render() {
        const { message } = this.state;
        return (
            <div>
                <h1 id='title'>Chat</h1><hr />
                <div id='Block'>
                    <div id='messageBlock'>
                        {
                            message.map((msg, index) => {
                                const { type, content } = msg;
                                switch (type) {
                                    case 'text':
                                        return (
                                            <div style={{margin:20}}>
                                                <h4 key={index + 'name'}> {(index % 2 === 0) ? 'Dave' : 'Paula'}</h4 >
                                                <p key={index + 'msg'}>{content}</p> 
                                            </div>
                                        )
                                    case 'image':
                                        return (
                                            <h4 key={index + 'name'}> {(index % 2 === 0) ? 'Dave' : 'Paula'}</h4 >,
                                            <img src={content} width={100} height={100}/>
                                        );
                                }
                            })
                        }
                    </div>
                    <div>
                        <input value={this.state.text} type='text' placeholder='TextLine'
                            onChange={this.onChangeText.bind(this)} />
                        <button className='button' onClick={this.sendText} >Send</button>
                        <img src={imag} onClick={() => this.fileInput.click()} height='30px' width='30px' />
                        <input type='file'
                            onChange={this.sendImage}
                            style={{ display: 'none' }}
                            ref={fileInput => this.fileInput = fileInput} />
                    </div>
                </div>
            </div>
        );
    }
}

