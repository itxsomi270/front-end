import React from 'react';
import './Contact.css'; // Import external CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="heading">Contact Us</h1>
      <p className="intro">
        Feel free to reach out to me through any of the contact options below. Whether you have questions, feedback, or just want to connect, I'm always happy to hear from you!
      </p>

      <h2 className="subheading">Contact Information</h2>
      <div className="contact-info">
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:usama.madni270@gmail.com">usama.madni270@gmail.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/itxsomi270" target="_blank" rel="noopener noreferrer">itxsomi270</a></li>
          <li><strong>Phone:</strong> <a href="tel:+923377651270">+923377651270</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/923377651270" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/usama-madni-270" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        </ul>
      </div>

      <h2 className="subheading">Get in Touch</h2>
      <p className="paragraph">
        I’m always open to discussing web development, new opportunities, or collaboration ideas. Feel free to drop me a message anytime!
      </p>
    </div>
  );
};

export default Contact;
