import React, { Component } from 'react';


export default class CommentItem extends Component {
    render() {
        const {
            comments
        } = this.props;
            const commentItems = this.props.comments.map(comment => (
                <div className='box' key={this.props.postId}>
                    <p className='innertopbox'>{comment.body}</p>
                    <div className='innerBottemBox'>
                        <div className='innerBBLeft'>{comment.email}</div>
                        <div className='innerBBRight'>{comment.name}</div>
                    </div>
                </div>));  
        return commentItems;   
    }
}