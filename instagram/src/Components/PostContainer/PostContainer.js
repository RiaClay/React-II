import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = ({postData}) => (
    
    <div className="posts">
        <div className="thumbnail">
            <img src={postData.thumbnailUrl} alt='' />
            <span><b>{postData.username}</b></span>
        </div>
        <div className="picture">
            <img src={postData.imageUrl} alt='' />
        </div>
        <CommentSection comments={postData.comments} />
    </div>

)

export default PostContainer;


