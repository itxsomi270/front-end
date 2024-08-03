import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rent.css';

function Rent({ userData }) {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    price: '',
    propertyType: '',
  });
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const [addressToFetch, setAddressToFetch] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFiles = new FormData();
    formDataWithFiles.append('title', formData.title);
    formDataWithFiles.append('description', formData.description);
    formDataWithFiles.append('address', formData.address);
    formDataWithFiles.append('price', formData.price);
    formDataWithFiles.append('propertyType', formData.propertyType);
    images.forEach((image) => formDataWithFiles.append('images', image));

    try {
      const response = await fetch('http://localhost:5000/rent-your-space', {
        method: 'POST',
        body: formDataWithFiles,
      });

      if (response.ok) {
        setMessage('Property listed successfully!');
        setFormData({
          title: '',
          description: '',
          address: '',
          price: '',
          propertyType: '',
        });
        setImages([]);
      } else {
        setMessage('Failed to list property.');
      }
    } catch (error) {
      setMessage('Internal server error.');
    }
  };

  const mapUrl = location ? `https://www.google.com/maps?q=${location}` : '#';

  return (
    <div className='container rent-your-space'>
      {userData ? (
        <>
          <h1>Rent Your Space</h1>
          {/* Form to submit rental listing */}
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Property Title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                placeholder="Property Description"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address || location}
                onChange={handleChange}
                className="form-control"
                placeholder="Property Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                placeholder="Rental Price"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="propertyType">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select Type</option>
                <option value="shared">Shared Room</option>
                <option value="whole">Whole Room</option>
                <option value="apartment">Whole Apartment</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="images">Upload Images</label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Listing</button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </>
      ) : (
        <div className='overlay p-5'>
          <h2>Please Sign Up to List Your Property</h2>
          <button onClick={() => navigate('/signup')} className='btn btn-primary px-5 me-2'>Sign Up</button>
          <button onClick={() => navigate('/login')} className='btn btn-primary px-5 '>Login</button>
        </div>
      )}
    </div>
  );
}

export default Rent;
