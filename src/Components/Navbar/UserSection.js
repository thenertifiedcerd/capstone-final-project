import React, { useState } from 'react';
import './Navbar.css';

const UserSection = () => {
  // State variable to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Assume you have stored a value in sessionStorage with the key 'userEmail'
const userEmail = sessionStorage.getItem('userEmail');

if (userEmail) {
  console.log('User Email:', userEmail);
} else {
  console.log('No user email found in sessionStorage.');
}

  // Function to toggle login status (for demonstration purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button className='btn-2' onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      {isLoggedIn && (
          <h3>Welcome, {userEmail}!</h3>
      )}
    </div>
  );
};

export default UserSection;