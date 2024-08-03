import React from 'react';
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import './Footer.css';
import logo from './logo.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row align-items-center'>
          {/* Left Side - Logo */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <img src={logo} alt="Find a Hostel" className='footer-logo' />
          </div>

          {/* Right Side - Social Media Links */}
          <div className='col-lg-8 col-md-6 col-sm-12 text-right'>
            <div className='social-links'>
              <a href="https://www.facebook.com" className='social-link' target="_blank" rel="noopener noreferrer">
                <BiLogoFacebook />
              </a>
              <a href="https://www.linkedin.com" className='social-link' target="_blank" rel="noopener noreferrer">
                <BiLogoLinkedin />
              </a>
              <a href="https://www.whatsapp.com" className='social-link' target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Reserved Line */}
        <div className='row'>
          <div className='col-12 text-center'>
            <p>&copy; 2024 Find a Hostel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
