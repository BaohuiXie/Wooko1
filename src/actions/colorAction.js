import { CHANGE_COLOR } from './types';

export function changeColor(color) {
    return dispatch => {
        dispatch({type: CHANGE_COLOR, payload: color});
    }
}
