// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="nav-bar">
        <ul className="nav-list">
          <li> 
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user-profile">User Profile</Link>
          </li>
          <li>
            <Link to="/add-list">Add List</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;