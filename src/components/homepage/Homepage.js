import React, { useState, useEffect } from 'react';
import './Homepage.css'
import '../../App.css'


const Home = () => {
  // Sample listings data (this would typically come from an API)
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const sampleListings = [
      {
        id: 1,
        title: 'Shared Rooms',
        description: 'A cozy shared room with all the basic amenities.',
        imageUrl: 'https://picsum.photos/400/300/?random=1',
      },
      {
        id: 2,
        title: 'Whole Room',
        description: 'A quiet room in a friendly neighborhood.',
        imageUrl: 'https://picsum.photos/400/300/?random=2',
      },
      {
        id: 3,
        title: 'Whole Apartment',
        description: 'Spacious apartment perfect for students.',
        imageUrl: 'https://picsum.photos/400/300/?random=3',
      },
    ];

    // Simulating an API call
    setTimeout(() => {
      setListings(sampleListings);
    }, 1000);
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h2>Find your perfect space</h2>
          <form id="search-form">
            <input type="text" placeholder="Enter a location..." id="search-input" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="listings">
        <div className="container">
          <h3>Available Listings</h3>
          <div id="listings-container">
            {listings.length > 0 ? (
              listings.map((listing) => (
                <div key={listing.id} className="listing-item">
                  <img src={listing.imageUrl} alt={listing.title} />
                  <h4>{listing.title}</h4>
                  <p>{listing.description}</p>
                </div>
              ))
            ) : (
              <p>Loading listings...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
