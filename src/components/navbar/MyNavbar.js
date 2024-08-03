import React from 'react';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import logo from './logo.png';

function MyNavbar({ userData }) {
  return (
    <nav className="navbar navbar-expand-lg mynav w-100 p-0 m-0">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/homepage">
          <img src={logo} alt="Find a Hostel" className="navbar-logo" />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">How it Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent">Rent Your Space</Link>
            </li>

            {/* Conditional rendering for Login/Signup or Username */}
            {!userData ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <span className="navbar-text">{userData.name}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
