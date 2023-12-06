// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import './styles/tailwind.css';

import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import HomePage from './pages/HomePage.js';
import UserProfilePage from './pages/UserProfilePage.js';
import AddListPage from './pages/AddListPage.js';
import GamePage from './pages/GamePage.js';

const clerkPubKey = "pk_test_b3B0aW11bS1rb2FsYS0yOC5jbGVyay5hY2NvdW50cy5kZXYk";
  
  function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [userColor, setUserColor] = useState('blue-300'); // Default color


    const handleLogin = (username) => {
      // Simulate login logic, set the logged-in user
      setLoggedInUser(username);
    };

    const handleRegister = (username, password) => {
      // Simulate registration logic
      console.log(`User registered: ${username}`);
      setLoggedInUser(username);
    };

    const handleAddList = (listName) => {
      // Simulate adding a new list logic
      console.log(`New list added: ${listName}`);
    };

    const appBackgroundColorClass = `bg-${userColor} min-h-screen h-full p-20`;


    return (

      <Router>
        <div className={`font-sans ${appBackgroundColorClass}`}>
        {/* <div className="font-sans bg-blue-300 min-h-screen h-full p-20"> */}
          <div className="bg-white rounded-lg max-w-[80%] mx-auto p-10 flex flex-col items-center">
            <h4 className="block w-full text-center text-lg mb-0">voca</h4>
            <h6 className="block w-full text-center text-m mb-4">word games with friends</h6>

            <Routes>
              <Route path="/" element={loggedInUser ? <Navigate to="/home" /> : <Navigate to="/login" />}/>
              <Route path="/login" element={loggedInUser ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />} />
              <Route path="/register" element={loggedInUser ? <Navigate to="/home" /> : <RegisterPage onRegister={handleRegister} />} />

              <Route path="/home" element={loggedInUser ? <HomePage /> : <Navigate to="/login" />} />
              <Route path="/user-profile" element={loggedInUser ? <UserProfilePage username={loggedInUser} /> : <Navigate to="/login" />} />
              <Route path="/add-list" element={loggedInUser ? <AddListPage onAddList={handleAddList} /> : <Navigate to="/login" />} />
              <Route path="/game" element={loggedInUser ? <GamePage /> : <Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;
