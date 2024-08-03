import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/signup', { // Correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage(responseData.message);
        console.log('User registered successfully');
        setFormVisible(false); // Hide the form on successful registration
      } else {
        setMessage(responseData.error || 'Failed to register user');
        console.error('Failed to register user');
      }
    } catch (error) {
      setMessage('Internal server error');
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className='sign-up-container'>
      <div className='sign-up-box'>
        {formVisible && (
          <>
            <h2>Sign Up</h2> {/* Heading remains as Sign Up */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
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
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <button type="submit" className="btn btn-sign-up">Sign Up</button> {/* Button text remains as Sign Up */}
            </form>
          </>
        )}
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default Signup;
