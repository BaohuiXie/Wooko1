import uparrow from '../picture/up-arrow.png';
import downarrow from '../picture/download.png';
import React, { PureComponent } from 'react';
import CommentItems from './CommentItems'
import styles from './post.styles';
import './post.styles';

export default class BottomBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            componentIdentifier:false,
        };
    }
    render(){
        const {comments, postID}=this.props;
        return([
            <div style={styles.bottombox}>
                <div style={styles.paragraph}><p>Show Comments</p></div>
                <div style={styles.arrow}>
                    {this.state.componentIdentifier ? 
                        <img src={uparrow} alt='uparraw' onClick={() => {this.identifyinComponent(false)}} height={20} width={20} />
                        :<img src={downarrow} alt="download" onClick={() => {this.identifyinComponent(true)}} height={20} width={20} />
                    }
                </div>
            </div>,
            <div style={styles.innercomment}>
                {this.state.componentIdentifier? this.validComments(comments,postID):null}
            </div>
        ]);      
    }

    identifyinComponent=(trueOrfalse)=>{
        this.props.identify&&this.props.identify(trueOrfalse);
        this.setState({componentIdentifier: trueOrfalse});
    }

    validComments(comments,post_id){
        let comments_sub = [];
        comments.forEach((comment) =>{
            if (comment.postId == post_id) {
                comments_sub.push(comment);
            }
        });
        return <CommentItems comments={comments_sub} postId={post_id} />;
    }
}