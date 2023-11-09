// pages/UserProfilePage.js
import React from 'react';

const UserProfilePage = ({ username }) => {
  return (
    <div>
      <h2>User Profile Page</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfilePage;