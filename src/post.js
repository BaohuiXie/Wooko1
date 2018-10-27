import React, { Component } from 'react';
import './components/post.styles';
import Stars from './components/star';
import PostForm from './components/Postforms'
import { connect } from 'react-redux';  //redux
import { fetchPosts, fetchComment } from './actions/postAction'
import { changeColor } from './actions/colorAction';
import BottomBox from './components/BottomBox'
import styles from './components/post.styles';
const axios = require('axios');

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.fetchPosts();
        this.props.fetchComment();
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
                <div style={styles.box} key={post.id}>
                    <h3 style={styles.topbox}>{post.title}</h3>
                    <div style={styles.midbox}>
                        <p>{post.body}</p>
                        <div style={styles.starbox}>
                            <Stars
                                totalstarNum={5}
                                showstars={(litNum) => {
                                }} />
                        </div>
                    </div>
                    <BottomBox 
                        comments={this.props.comments}
                        postID={post.id}
                        identify={(trueOrfalse) => {}}
                        />
                    {/* 记得把post的state identifyonClick传给BottomBox的props */}
                </div>
            ));
            return ([
                <div style={styles.box}>
                    <div
                        style={{ width: 50, height: 50, backgroundColor: this.props.color ? this.props.color : 'black' }}
                        onClick={() => {
                            if (this.props.color === 'green') {
                                this.props.changeColor('orange');
                            } else {
                                this.props.changeColor('green');
                            }
                        }} />
                    <h1 style={styles.header}>Posts</h1><hr />
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

