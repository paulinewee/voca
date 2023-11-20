import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="flex flex-row list-none">
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
          {loggedInUser ? (
            <li>
              <Link to="/login" onClick={() => setLoggedInUser(null)}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
};

export default HomePage;
