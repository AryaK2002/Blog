import React,{useState} from 'react'
import Post from './Post'
import postsData from '../data/PostsData'

function Posts() {
    const [posts, setPosts] = useState(postsData);

    const addComment = (newComment) => {
    const updatedPosts = posts.map((post) => {
        if (post.id === newComment.postId) {
        return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
    });
    setPosts(updatedPosts);
    };

  return (
    <div>
        {
            postsData.map(post => {return(<Post key={post.id} post={post} addComment={addComment}/>)})
        }
    </div>
  )
}

export default Posts