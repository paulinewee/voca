// pages/UserProfile.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfilePage.js';

const UserProfilePage = ({ username }) => {
  return (
    <div>
      <UserProfile/>
    </div>
  );
};

export default UserProfilePage;