import React from 'react';
import './Comment.css'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p className='commentText'>{comment.text}</p>
      <p className='commentDate'>{`Commented on ${comment.date}`}</p>
    </div>
  );
};

export default Comment;
