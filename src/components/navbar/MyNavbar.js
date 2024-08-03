import React from 'react';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import logo from './logo.png';

function MyNavbar({ userData, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg mynav w-100 p-0 py-2 m-0">
      <div className="container-fluid">
        <Link className="navbar-brand p-0" to="/homepage">
          <img src={logo} alt="Find a Hostel" className="navbar-logo" />
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">How it Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent">Rent Your Space</Link>
            </li>
          </ul>

          <ul className="navbar-nav navbar-nav-right ms-auto">
            {!userData?.name ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-get-started" to="/signup">Get Started</Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {userData.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#" onClick={handleLogout}>Log Out</a></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
