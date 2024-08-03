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
  const [userData, setUserData] = useState(null); // Store user data here

  return (
    <Router>
      <MyNavbar userData={userData} /> {/* Pass userData to the Navbar */}
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route 
          path="/login" 
          element={<Login setUserData={setUserData} />} 
        /> {/* Pass setUserData to Login */}
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/rent" 
          element={<Rent userData={userData} />} 
        /> {/* Pass userData to Rent */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
