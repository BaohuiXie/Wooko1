import {FETCH_POSTS} from './types';
import {FETCH_COMMENT} from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
    );                                                              //thunk 返回函数的函数
}

export const fetchComment= () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res =>res.json())
    .then(comment => dispatch({
        type: FETCH_COMMENT,
        upperload: comment                                          //thunk
    }))
}


