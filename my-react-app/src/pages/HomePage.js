import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import HistList from '../components/HistList';
import SetGame from '../components/SetGame';

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
  return (
    <div className="w-full mx-auto">
      <Nav/>
      <div className="flex flex-row">
        <div className="border border-gray-300 p-4 min-w-[33%]">
          <h3>Select a List</h3>
          <HistList/>
        </div>
        <div className="border border-gray-300 p-4 min-w-[33%]">
          <SetGame/>
        {/* Settings for Time or , Game Start */}
        </div>
        <div className="border border-gray-300 p-4 min-w-[33%]">
          {/* Leaderboard (singleplayer) or Lobby (multiplayer) */}
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
