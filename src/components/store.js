import { createStore, applyMiddleware } from  'redux'; //redux
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';//???????????

const initialState={};
const middleware=[thunk];//??????????????
const store=createStore(rootReducer, initialState,  applyMiddleware(...middleware));
export default store;

 //redux(rootreducer, initial state, function?????)
//const store = createStore(()=>[], {}, applyMiddleware())           take three parameter