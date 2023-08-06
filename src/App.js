import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import postsData from './data/PostsData';

const App = () => {
  const [posts, setPosts] = useState(postsData);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Posts/>}/>
          {/* <Route exact path="/" element={<Post key={posts[0].id} post={posts[0]} addComment={addComment}/>}/> */}
          <Route exact path="/new" element={<PostForm addPost={addPost} />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
