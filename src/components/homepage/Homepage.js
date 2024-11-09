import React, { useState, useEffect } from 'react';
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
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Fetch properties from backend on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:4000/get-properties');
        if (response.ok) {
          const data = await response.json();
          setProperties(data);  // Set properties fetched from MongoDB
        } else {
          console.error('Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();  // Call the function to fetch properties
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);  // Handle search input change
  };

  // Filter properties based on search query
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='wrapper'>
      {/* Carousel Section */}
      <div className="carousel">
        
      <div className="carousel-content">
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <img src={images[currentIndex]} className="carousel-image" alt={`Slide ${currentIndex + 1}`} />
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="search-bar">
          <h3 className="head">Search for Your Desired Location</h3>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Properties Section */}
      <div className="container-fluid properties-section py-5 px-4">
        <h2>Properties for You</h2>
        <p>These properties are trending. Find the perfect place, book a tour, or contact to learn more.</p>

        {/* Rows of Cards */}
        <div className="container-fluid">
          <div className="row">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property._id} className="col-md-4">
                  <div className="card">
                    {/* Display image, if available */}
                    {property.images && property.images[0] && (
                      <img
                        src={`data:${property.images[0].contentType};base64,${property.images[0].data}`}
                        className="card-img-top"
                        alt={property.title}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">{property.address}</p>
                      <p className="card-text">Price: ${property.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No properties found.</p>  // If no properties match the search
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
