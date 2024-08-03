import React, { useState } from 'react';
import User from '../user/User'; // Adjust import path as needed
import './Login.css';

function Login({ setUserData }) { // Accept setUserData as a prop
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage('');
        setUserData(responseData.user); // Update user data in App component
        console.log('User logged in successfully');
      } else {
        setMessage(responseData.error || 'Failed to log in');
        console.error('Failed to log in');
      }
    } catch (error) {
      setMessage('Internal server error');
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className='sign-in-container'>
      <div className='sign-in-box'>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-sign-in">Sign In</button>
        </form>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default Login;
