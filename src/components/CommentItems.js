import React, { Component } from 'react';
import styles from './post.styles';



export default class commentItems extends Component {
    render() {
        const commentItems = this.props.comments.map(comment => (
            <div style={styles.innercommentsecondbox} key={this.props.postId}>
                <p style={styles.innertopbox}>{comment.body}</p>
                <div style={styles.innerBottemBox}>
                    <div style={styles.innerBBLeft}>{comment.email}</div>
                    <div style={styles.innerBBRight}>{comment.name}</div>
                </div>
            </div>
        ));  
        return commentItems;   
    }
}