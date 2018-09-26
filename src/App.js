import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Post from './post';
import store from './components/store'
import {Router,Route,browserHistory} from 'react-router';
import { Provider} from 'react-redux';  //redux


class App extends Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   const rootRef = firebase.database().ref().child('react');
  //   const speedRef = rootRef.child('speed');
  //   sp
  // }
  
  render() {
    return (                         //redux
      <Provider  store={store}>   
        <Router history={browserHistory}>
          <Route path='signup' component={Signup}/>
          <Route path='post' component={Post}/>
        </Router>
      </Provider>     //redux
    );
  }
}
export default App;
