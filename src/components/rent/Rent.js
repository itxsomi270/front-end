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
    bedrooms: '', // Add default value
    bathrooms: '', // Add default value
    entranceType: '', // Add default value
    gas: false, // Utilities
    internet: false,
    water: false,
    electricity: false,
    garage: false, // Amenities
    kitchen: false,
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

  const handleCkBoxChange = (e) => {
    const { name, type, checked } = e.target;
  
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,  // Toggle checked/unchecked state
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataWithFiles = new FormData();
    formDataWithFiles.append('title', formData.title);
    formDataWithFiles.append('description', formData.description);
    formDataWithFiles.append('address', formData.address);
    formDataWithFiles.append('price', formData.price);
    formDataWithFiles.append('propertyType', formData.propertyType);
    formDataWithFiles.append('bedrooms', formData.bedrooms);
    formDataWithFiles.append('bathrooms', formData.bathrooms);
    formDataWithFiles.append('entranceType', formData.entranceType);
    formDataWithFiles.append('gas', formData.gas);
    formDataWithFiles.append('internet', formData.internet);
    formDataWithFiles.append('water', formData.water);
    formDataWithFiles.append('electricity', formData.electricity);
    formDataWithFiles.append('garage', formData.garage);
    formDataWithFiles.append('kitchen', formData.kitchen);
    
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
          bedrooms: '',
          bathrooms: '',
          entranceType: '',
          gas: false,
          internet: false,
          water: false,
          electricity: false,
          garage: false,
          kitchen: false,
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
  <label htmlFor="address">Address</label>
  <div className="input-group">
    <input
      type="text"
      id="address"
      name="address"
      value={formData.address}
      onChange={handleChange}
      className="form-control address-input"
      placeholder="Property Address"
      required
    />
    <button
      type="button"
      onClick={handleFindLocation}
      className="btn btn-secondary location-button"
    >
      Find My Location
    </button>
  </div>
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
              <label htmlFor="title">Contact</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Owners Contact"
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
            {/* checkboxes */}
<div className="my-2">
  {/* Bedrooms */}
  <div className="">
    <label className='d-block fw-bold mb-1'>Bedrooms</label>
    <div className="form-check-inline">
      {[1, 2, 3, 4].map((number) => (
        <label key={number} className="form-check-label me-2">
          <input
            type="radio"
            name="bedrooms"
            value={number}
            checked={formData.bedrooms === number.toString()}
            onChange={handleChange}
            className="form-check-input large-checkbox"
          />
          {number}
        </label>
      ))}
      <label className="form-check-label ">
        <input
          type="radio"
          name="bedrooms"
          value="4+"
          checked={formData.bedrooms === "4+"}
          onChange={handleChange}
          className="form-check-input large-checkbox"
        />
        4+
      </label>
    </div>
  </div>

  {/* Bathrooms */}
  <div className="my-2">
    <label className='d-block fw-bold mb-1'>Bathrooms</label>
    <div className="form-check-inline">
      {[1, 2, 3, 4].map((number) => (
        <label key={number} className="form-check-label me-2">
          <input
            type="radio"
            name="bathrooms"
            value={number}
            checked={formData.bathrooms === number.toString()}
            onChange={handleChange}
            className="form-check-input large-checkbox"
          />
          {number}
        </label>
      ))}
      <label className="form-check-label me-2">
        <input
          type="radio"
          name="bathrooms"
          value="4+"
          checked={formData.bathrooms === "4+"}
          onChange={handleChange}
          className="form-check-input large-checkbox"
        />
        4+
      </label>
    </div>
  </div>

  {/* Entrance Type */}
  <div className="my-2">
    <label className='d-block fw-bold mb-1'>Entrance Type</label>
    <div className="form-check-inline">
      <label className="form-check-label me-2">
        <input
          type="radio"
          name="entranceType"
          value="gate"
          checked={formData.entranceType === "gate"}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Gate
      </label>
      <label className="form-check-label me-2">
        <input
          type="radio"
          name="entranceType"
          value="door"
          checked={formData.entranceType === "door"}
          onChange={handleChange}
          className="form-check-input large-checkbox"
        />
        Door
      </label>
    </div>
  </div>
</div>

<div className="row mt-3">
  {/* Utilities */}
  <div className="form-group col-12">
    <label>Utilities</label>
    <div className="d-flex">
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="gas"
          checked={formData.gas}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Gas
      </label>
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="internet"
          checked={formData.internet}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Internet
      </label>
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="water"
          checked={formData.water}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Water
      </label>
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="electricity"
          checked={formData.electricity}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Electricity
      </label>
    </div>
  </div>

  {/* Amenities */}
  <div className="form-group col-12">
    <label>Amenities</label>
    <div className="d-flex">
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="garage"
          checked={formData.garage}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Garage
      </label>
      <label className="form-check-label me-2">
        <input
          type="checkbox"
          name="kitchen"
          checked={formData.kitchen}
          onChange={handleCkBoxChange}
          className="form-check-input large-checkbox"
        />
        Kitchen
      </label>
    </div>
  </div>
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
