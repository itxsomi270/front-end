import React, { useState } from 'react';
import SignIn from '../Signin/Signin'; // Assuming SignIn component is imported from './SignIn'
import SignUp from '../Signup/Signup'; // Assuming SignUp component is imported from './SignUp'

function Contact() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUp(true);
    setShowSignIn(false); // Hide SignIn form
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 d-flex justify-content-center mt-5'>
          {showSignIn && <SignIn />}
          {showSignUp && <SignUp />}
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6 d-flex justify-content-center mb-1 mt-2'>
          {showSignIn && (
            <button onClick={handleRegisterClick} className='btn btn-success mx-2 w-100'>Register</button>
          )}
        </div>  
      </div>
    </div>
  );
}

export default Contact;
