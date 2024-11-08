import React, { useState } from 'react';
import './Homepage.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  'https://www.investopedia.com/thmb/XPnvXjFTJnA8j8VBEtNc7DfduN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_Real_Property_GettyImages-200478960-001-080ea7835ec1444881eddbe3b2a5a632.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqvpakZWHnQuXu0qSyJkwvZKbO6X7Rlj8hw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W48ACObaKPnVcCzBDYBIwfvLNP9ZTL12JQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB2wwR5QhKIl82bzFc_i9_fDuGL5olqf9XQ&s'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel">
        <div className="search-bar">
          <h3 className="head">Search for Your Desired Location</h3>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </div>

        <div className="carousel-content">
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <img src={images[currentIndex]} className="carousel-image" alt={`Slide ${currentIndex + 1}`} />
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container properties-section py-5 px-0">
        <h2>Properties for You</h2>
        <p>These properties are trending. Find the perfect place, book a tour, or contact to learn more.</p>

        {/* Rows of Cards */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 1" />
                <div className="card-body">
                  <h5 className="card-title">Property 1</h5>
                  <p className="card-text">A beautiful property with scenic views.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 2" />
                <div className="card-body">
                  <h5 className="card-title">Property 2</h5>
                  <p className="card-text">Located in the heart of the city.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 3" />
                <div className="card-body">
                  <h5 className="card-title">Property 3</h5>
                  <p className="card-text">Modern amenities and spacious rooms.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 4" />
                <div className="card-body">
                  <h5 className="card-title">Property 4</h5>
                  <p className="card-text">Quiet neighborhood with lots of space.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 5" />
                <div className="card-body">
                  <h5 className="card-title">Property 5</h5>
                  <p className="card-text">Close to public transportation.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Property 6" />
                <div className="card-body">
                  <h5 className="card-title">Property 6</h5>
                  <p className="card-text">Affordable and well-maintained.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
