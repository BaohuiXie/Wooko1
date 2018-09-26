import React, { Component } from 'react';
import './post.css';
import uparrow from './up-arrow.png';
import downarrow from './download.png';
import Stars from './components/star';
import CommentItem from './components/CommentItem'
import Outbox from './components/outbox';
import PostForm from './components/Postforms'
import { connect } from 'react-redux';  //redux
import { fetchPosts, fetchComment } from './actions/postAction'
import { changeColor } from './actions/colorAction';
const axios = require('axios');

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // posts: [],
            identifyonClick: false,
            num: 1,
        };
    }

    //functio?n(){this.box1show1()}
    // {()=> this.box1show1()}
    // (x) => this.box1show1()

    componentWillMount() {
        this.props.fetchPosts();
        this.props.fetchComment();
    }
    componentDidMount() {
        alert(this.props.location.query.hhh);
    }
    // componentWillMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState({posts: data}));
    // }

    // componentWillMount() {
    //     let p = axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //         validateStatus: function (status) {
    //             return status >= 200 && status < 300; // default
    //         },
    //     });

    //     p.then((response) => {
    //         this.setState({posts: response.data});
    //     });
    // }

    validComments(comments,post_id){
        let comments_sub = [];
        comments.forEach((comment) =>{
            if (comment.postId == post_id) {
                comments_sub.push(comment);
            }
        });
        return <CommentItem comments={comments_sub} postId={post_id} />;
    }

    render() {
        const {
            post_status,
            comments_status,
            items,
            comments
        } = this.props;

        if (post_status === 'loading' || comments_status === 'loading') {
            return (
                <h1>Waiting...</h1>
            );
        } else {
            const postItems = items.map(post => (
                <div className='box' key={post.id}>
                    <h3 className='topbox'>{post.title}</h3>
                    <div className='midbox'>
                        <p>{post.body}</p>
                        <div className='starbox'>
                            <Stars litNum={this.state.num} totalstarNum={5} gooooo={index => this.setState({ num: index })} />
                        </div>
                    </div>
                    <div className='bottombox'>
                        <div className='paragraph'><p>Show Comments</p></div>
                        <div className='arrow'>
                            {this.state.identifyonClick ? <img src={uparrow} alt='uparraw' onClick={() => this.setState({ identifyonClick: false })} height={20} width={20} />
                                : <img src={downarrow} alt="downarrow" onClick={() => this.setState({ identifyonClick: true })}
                                    height={20} width={20} />}
                        </div>
                    </div>
                    <div >
                        {this.state.identifyonClick? this.validComments(comments,post.id):null}
                    </div>
                </div>
            ));
            return ([
                <div>
                    <div
                        style={{ width: 50, height: 50, backgroundColor: this.props.color ? this.props.color : 'black' }}
                        onClick={() => {
                            if (this.props.color === 'green') {
                                this.props.changeColor('orange');
                            } else {
                                this.props.changeColor('green');
                            }
                        }} />
                    <h1>Posts</h1><hr />
                    <PostForm />
                    <br />
                    {postItems}
                </div>
            ]);
        }
    }
}

const mapStateToProps = redux_store => ({
    items: redux_store.posts.items,
    post_status: redux_store.posts.items_status,
    comments: redux_store.posts.comments,
    comments_status: redux_store.posts.comments_status,
    color: redux_store.color
});

const mapDispatchToProps = {
    fetchPosts,
    fetchComment: fetchComment,   //the first one is naming by myself
    changeColor                //same as changeColor :changeColor 
};

export default connect(mapStateToProps, mapDispatchToProps)(Post); //参数一刷星时给到post里（view组件）参二在submit一个新的数据时才传给post 

