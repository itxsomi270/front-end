import React, { useState, useEffect } from 'react';
import './Posts.css'

function Posts() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [updatedContent, setUpdatedContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null); // To track which post is currently being edited

  const handleChange = (e) => {
    setNewPost(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content: newPost };
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

  const handleDelete = async (postId) => {
    try {
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'DELETE',
      });
      console.log('post deleted');
      // Refresh the posts after deleting one
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const handleUpdate = async (postId, updatedContent) => {
    try {
      // Send PUT request to update the content
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: updatedContent })
      });
      
      console.log('Post updated');
      // Refresh the posts after updating one
      fetchPosts();
      // Reset editingPostId after updating
      setEditingPostId(null);
    } catch (error) {
      console.error('Error updating post:', error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {/* make a post area */}
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
      {/* posts display area */}
      <div className='posts-display-area'>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <div key={post._id} className='posts-area'>
              {editingPostId === post._id ? ( // If post is being edited
                <div>
                  <textarea
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    value={updatedContent}
                    onChange={(e) => setUpdatedContent(e.target.value)}
                  ></textarea>
                  <button 
                    className='btn btn-success mt-2'
                    onClick={() => handleUpdate(post._id, updatedContent)}
                  >Update</button>
                </div>
              ) : (
                <div className='mt-1 d-flex justify-content-between'>
                  <p>{post.content}</p>
                  <div>
                  <button 
                    className='btn btn-secondary mx-1'
                    onClick={() => setEditingPostId(post._id)}
                  >Edit</button>
                  <button 
                    className='btn btn-danger mx-1'
                    onClick={() => handleDelete(post._id)}
                  >Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts;
