import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {posts.length ? (
        posts.map(post => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>By {post.author.username}</small>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default App;
