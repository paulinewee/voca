// App.js
import React, { useState } from 'react';
import { Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import HomePage from './pages/HomePage.js';
import UserProfilePage from './pages/UserProfilePage.js';
import AddListPage from './pages/AddListPage.js';
import GamePage from './pages/GamePage.js';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // Simulate login logic, set the logged-in user
    setLoggedInUser(username);
  };

  const handleRegister = (username, password) => {
    // Simulate registration logic
    console.log(`User registered: ${username}`);
  };

  const handleAddList = (listName) => {
    // Simulate adding a new list logic
    console.log(`New list added: ${listName}`);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
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

        <Routes>
          <Route path="/login">
            {loggedInUser ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />}
          </Route>
          <Route path="/register">
            {loggedInUser ? <Navigate to="/home" /> : <RegisterPage onRegister={handleRegister} />}
          </Route>
          <Route path="/home">
            {loggedInUser ? <HomePage /> : <Navigate to="/login" />}
          </Route>
          <Route path="/user-profile">
            {loggedInUser ? <UserProfilePage username={loggedInUser} /> : <Navigate to="/login" />}
          </Route>
          <Route path="/add-list">
            {loggedInUser ? <AddListPage onAddList={handleAddList} /> : <Navigate to="/login" />}
          </Route>
          <Route path="/game">
            {loggedInUser ? <GamePage /> : <Navigate to="/login" />}
          </Route>
          <Navigate from="/" to="/home" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
