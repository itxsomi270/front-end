import React, { useState } from 'react';
//renamed

function Posts() {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { id: Date.now(), content: newPost };
    fetch('http://localhost:5000/posts',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    }
  ).then(()=>{
    console.log('post added')
  })
    setNewPost('');
  }

  const handleChange = (e) => {
    setNewPost(e.target.value);
  }

  return (
    <div className="container">
      <h1>Posts Section</h1>
      <div className="posts-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="postTextarea">Create a new post:</label>
            <textarea
              className="form-control"
              id="postTextarea"
              rows="3"
              value={newPost}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
      <div className="mt-4">
        <h2>Posts</h2>
      </div>
    </div>
  )
}

export default Posts;
