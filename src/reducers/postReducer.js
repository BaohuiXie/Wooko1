import {FETCH_POSTS} from '../actions/types';
import {FETCH_COMMENT} from '../actions/types';

const initialStatePost ={        //object
    items: [],                //array
    items_status: 'loading',
    comments: [],
    comments_status:'loading'
}

export default function(state = initialStatePost, action){
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,  
                items: action.payload,
                items_status: 'found',
            };
        case FETCH_COMMENT:
            return{
                ...state,
                comments: action.upperload,
                comments_status: 'found',
            };
        default:
        return state;
    }
}
