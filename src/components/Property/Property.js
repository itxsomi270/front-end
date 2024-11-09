import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Property = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        console.log('Fetching property details for ID:', propertyId); // Debug log
        const response = await fetch(`http://localhost:4000/get-property/${propertyId}`);
        console.log(response); // Debug log response status
        if (response.ok) {
          const data = await response.json();
          console.log('Property Data:', data); // Debug log the data received
          setProperty(data);
        } else {
          console.error('Failed to fetch property details');
        }
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (!property) return <p>Loading property details...</p>;

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price}</p>
      <p>Bedrooms: {property.bedrooms || 'N/A'}</p>
      <p>Bathrooms: {property.bathrooms || 'N/A'}</p>
      <p>Entrance Type: {property.entranceType || 'N/A'}</p>
      <p>Garage: {property.garage ? 'Available' : 'Not available'}</p>
      {/* Add other fields as needed */}
    </div>
  );
};

export default Property;
