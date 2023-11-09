// components/UserProfile.js
import React from 'react';

const UserProfilePage = ({ username }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;
