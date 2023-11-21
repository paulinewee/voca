// pages/UserProfilePage.js
import React from 'react';
import Nav from '../components/Nav';

const UserProfilePage = ({ username }) => {
  return (
    <div>
      <Nav/>
      <h2>User Profile Page</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfilePage;