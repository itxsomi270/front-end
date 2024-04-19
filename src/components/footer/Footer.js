import './Footer.css'
import React from 'react';
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <div className='row footer'>
      <div className='col-md-6 pt-2 px-0'>
        <h1>Usama</h1>
      </div>
      <div className='col-md-5 social pt-4'>
      <div className='row'>
        <a className='col facebook ps-0 py-0 my-0'><BiLogoFacebook /> <p>facebook</p></a>
        <a className='col linkedIn ps-0 py-0'><BiLogoLinkedin /> <p>linkedIn</p></a>
        <a className='col whatsapp ps-0 py-0'><RiWhatsappFill /> <p>whatsapp</p></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
