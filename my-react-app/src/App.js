// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import HomePage from './pages/HomePage.js';
import UserProfilePage from './pages/UserProfilePage.js';
import AddListPage from './pages/AddListPage.js';
import GamePage from './pages/GamePage.js';
import Form from './components/Form';
import './App.css';  // Adjust the path based on your file structure



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
      <div className="main-container">
        <h1>Voca: Vocabulary Games with Friends</h1>


        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/user-profile">User Profile</Link>
            </li>
            {/* <li>
              <Link to="/form">Form</Link>
            </li> */}
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

        <h2>Add your own Vocabulary List</h2>
        <p>Comma Separated Values</p>
        <Form/>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={loggedInUser ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={loggedInUser ? <Navigate to="/home" /> : <RegisterPage onRegister={handleRegister} />} />
          <Route path="/home" element={loggedInUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/user-profile" element={loggedInUser ? <UserProfilePage username={loggedInUser} /> : <Navigate to="/login" />} />
          <Route path="/add-list" element={loggedInUser ? <AddListPage onAddList={handleAddList} /> : <Navigate to="/login" />} />
          {/* <Route path="/form" element={loggedInUser ? <Form /> : <Navigate to="/form" />} /> */}
          <Route path="/game" element={loggedInUser ? <GamePage /> : <Navigate to="/login" />} />
        </Routes>

        {/* Global Redirect */}
        <Navigate from="/" to="/home" />


      </div>
    </Router>
  );
}


export default App;
