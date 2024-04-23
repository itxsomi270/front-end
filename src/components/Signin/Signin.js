import React, { useState } from 'react';
import User from '../user/User'

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage('');
        setUserData(responseData.user); // Store user data in state
        console.log('User logged in successfully');
        // Handle success, such as redirecting to another page
      } else {
        setMessage(responseData.error || 'Failed to log in');
        console.error('Failed to log in');
        // Handle error, such as displaying error message to the user
      }
    } catch (error) {
      setMessage('Internal server error');
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6 form'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
          {userData && (
            <div className="mt-3">
              <User userData={userData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
