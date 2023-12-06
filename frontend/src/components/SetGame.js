// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const SetGame = () => {
  return (
    <div>
        <div className="flex flex-col mb-8">
            <h4>Time Setting</h4>
            <label className="mt-4" for="timed">
                <input type="radio" id="timed" name="timeSetting" value="timed"/>
                Timed
            </label>
            <label className="mt-4" for="untimed">
                <input type="radio" id="untimed" name="timeSetting" value="untimed"/>
                Untimed
            </label>
        </div>

        <div className="flex flex-col mb-8">
            <h4>Player Setting</h4>
            <label className="mt-4" for="singleplayer">
                <input type="radio" id="singleplayer" name="playerSetting" value="singleplayer"/>
                Single Player
            </label>
            <label className="mt-4" for="multiplayer">
                <input type="radio" id="multiplayer" name="playerSetting" value="multiplayer"/>
                Multiplayer
            </label>
        </div>
       <button>Start Game</button>
    </div>
  );
};

export default SetGame;