import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rent.css';

function Rent({ userData }) {
  // variables declaration
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
  const navigate = useNavigate();
  // variables declaration ends

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.title || !formData.description || !formData.address || !formData.price || !formData.propertyType) {
      setMessage('All fields are required.');
      return;
    }

    if (isNaN(formData.price) || formData.price <= 0) {
      setMessage('Price must be a valid positive number.');
      return;
    }

    const formDataWithFiles = new FormData();
    formDataWithFiles.append('title', formData.title);
    formDataWithFiles.append('description', formData.description);
    formDataWithFiles.append('address', formData.address);
    formDataWithFiles.append('price', formData.price);
    formDataWithFiles.append('propertyType', formData.propertyType);
    images.forEach((image) => formDataWithFiles.append('images', image));

    try {
      const response = await fetch('http://localhost:4000/rent-your-space', {
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

  const handleFindLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            // OpenStreetMap Nominatim API
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );

            const data = await response.json();

            // Use address details from the response
            const address = data.display_name || `${latitude}, ${longitude}`;
            setLocation(address);
            setFormData({ ...formData, address });
          } catch (error) {
            console.error("Error fetching address:", error);
            alert("Unable to retrieve location details.");
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
          alert("Unable to retrieve location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className='container rent-your-space'>
      {userData ? (
        <>
          <h1>Rent Your Space</h1>

          {/* Form to submit rental listing */}
          <form onSubmit={handleSubmit}>
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
                minLength="5" // Enforcing a minimum length for title
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
                minLength="10" // Enforcing a minimum length for description
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Property Address"
                required
                minLength="5" // Enforcing a minimum length for address
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={handleFindLocation} className="btn btn-secondary location">
                Find My Location
              </button>
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
                min="1" // Ensuring that the price is a positive number
                step="any" // Allows for decimal values
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
                className="file-input"
                required // Making images upload mandatory
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Listing</button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </>
      ) : (
        <div className='overlay p-5'>
          <h2>Please Sign Up to List Your Property</h2>
          <button onClick={() => navigate('/signup')} className='btn btn-primary px-5 me-2 mb-2'>Sign Up</button>
          <button onClick={() => navigate('/login')} className='btn btn-primary px-5 mb-2'>Login</button>
        </div>
      )}
    </div>
  );
}

export default Rent;
