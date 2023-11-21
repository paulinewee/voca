import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


const HomePage = ({ loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      <Nav/>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
};

export default HomePage;
