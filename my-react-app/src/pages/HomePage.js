import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import HistList from '../components/HistList';
import SetGame from '../components/SetGame';

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      <Nav/>
      <div className="col-3">
        <div className="col c1">
          <h3>Select a List</h3>
          <HistList/>
        </div>
        <div className="col c2">
          <SetGame/>
        {/* Settings for Time or , Game Start */}
        </div>
        <div className="col c3">
          {/* Leaderboard (singleplayer) or Lobby (multiplayer) */}
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
