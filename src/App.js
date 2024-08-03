import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from './components/navbar/MyNavbar';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import Posts from './components/posts/Posts';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Rent from './components/rent/Rent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    setUserData(null); // Clear user data
    // Optionally, you can also clear any stored authentication tokens here
  };

  return (
    <Router>
      <MyNavbar userData={userData} handleLogout={handleLogout} />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route 
          path="/login" 
          element={<Login setUserData={setUserData} />} 
        />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/rent" 
          element={<Rent userData={userData} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
