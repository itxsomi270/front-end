import React from 'react';

function User({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Add other user data fields as needed */}
    </div>
  );
}

export default User;
