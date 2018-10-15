import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
var config = {
        apiKey: "AIzaSyDZr_Q-nT5-t3YA4GoJgHiLWU81khJIBmc",
        authDomain: "chat-9f0ea.firebaseapp.com",
        databaseURL: "https://chat-9f0ea.firebaseio.com",
        projectId: "chat-9f0ea",
        storageBucket: "chat-9f0ea.appspot.com",
        messagingSenderId: "398537787655"
    };
    
    firebase.initializeApp(config);
    var database = firebase.database();
    const storage = firebase.storage();
    export {
        database, storage, firebase as default
    }
    Enzyme.configure({ adapter: new Adapter() });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
