import React, { useState } from 'react';

const UserSection = () => {
  // State variable to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status (for demonstration purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      {/* Display this section only if the user is logged in */}
      {isLoggedIn && (
        <div className="user-section">
          <h2>Welcome, User!</h2>
          <p>You are now logged in.</p>
          {/* Add more content here that should be visible when logged in */}
        </div>
      )}
    </div>
  );
};

export default UserSection;