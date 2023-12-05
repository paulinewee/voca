// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center space-x-4 font-semibold p-4 mx-auto">
          <li> 
            <Link to="/home" className="text-decoration-none hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/user-profile" className="text-decoration-none hover:underline">User Profile</Link>
          </li>
          <li>
            <Link to="/add-list" className="text-decoration-none hover:underline">Add List</Link>
          </li>
          <li>
            <Link to="/game" className="text-decoration-none hover:underline">Game</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;