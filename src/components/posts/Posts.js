import React, { useState, useEffect } from 'react';
import './Posts.css'

function Posts() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { id: Date.now(), content: newPost };
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    }).then(() => {
      console.log('post added');
      // Refresh the posts after adding a new one
      fetchPosts();
    });
    setNewPost('');
  }

  const handleChange = (e) => {
    setNewPost(e.target.value);
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts Section</h1>
      <div className="posts-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="postTextarea" className='my-2'>Create a new post:</label>
            <textarea
              className="form-control"
              id="postTextarea"
              rows="3"
              value={newPost}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Post
          </button>
        </form>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <p key={post.id} className='posts-area'>
              {post.content}
            </p>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts;
