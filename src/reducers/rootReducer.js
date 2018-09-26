import { combineReducers } from 'redux';        //combine all reducer in this file
import postReducer from './postReducer';
import colorReducer from './colorReducer';


export default combineReducers({
    posts: postReducer,
    color: colorReducer
})