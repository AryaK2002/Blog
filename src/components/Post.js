import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import './Post.css'
const Post = ({ post, addComment }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{`Posted on ${post.date}`}</p>
      <h3>Comments</h3>
      <CommentForm postId={post.id} addComment={addComment} />
      {post.comments && post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Post;
