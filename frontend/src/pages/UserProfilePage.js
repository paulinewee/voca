// components/UserProfile.js
import React, { useState } from 'react';
import BackgroundColorForm from '../components/BackgroundColorForm';
import Nav from '../components/Nav';

const UserProfilePage = ({ username }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = async (color) => {
    // Send a request to the server to update the user's color property
    try {
      const response = await fetch('/api/updateColor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          color: color,
        }),
      });

      if (response.ok) {
        setBackgroundColor(color);
      } else {
        console.error('Failed to update color');
      }
    } catch (error) {
      console.error('Error updating color:', error);
    }
  };

  const appStyles = {
    backgroundColor: backgroundColor || 'white',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div style={appStyles}>
      <Nav/>
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
      <BackgroundColorForm onColorChange={handleColorChange} />
    </div>
  );
};

export default UserProfilePage;
