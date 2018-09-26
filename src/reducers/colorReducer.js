import { CHANGE_COLOR } from '../actions/types';

export default function colorReducer(state, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.payload;
        default:  //重要
            return state? state : 'green';
    }
}
