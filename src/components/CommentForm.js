import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const CommentForm = ({ postId, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = {
        id: uuid(),
        postId,
        text: comment,
        date: new Date().toISOString().slice(0, 10),
      };
      addComment(newComment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
