import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './PostForm.css'

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const history = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title && content) {
        const newPost = {
          id: uuid(),
          title,
          content,
          date: new Date().toISOString().slice(0, 10),
        };
        addPost(newPost);
        history.push('/');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
        />
        <button type="submit">Add Post</button>
      </form>
    );
  };
  
export default PostForm;