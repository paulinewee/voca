// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const SetGame = () => {
  return (
    <div>
        <div className="choice-block">
            <h4>Time Setting</h4>
            <label for="timed">
                <input type="radio" id="timed" name="timeSetting" value="timed"/>
                Timed
            </label>
            <label for="untimed">
                <input type="radio" id="untimed" name="timeSetting" value="untimed"/>
                Untimed
            </label>
        </div>

        <div className="choice-block">
            <h4>Player Setting</h4>
            <label for="singleplayer">
                <input type="radio" id="singleplayer" name="playerSetting" value="singleplayer"/>
                Single Player
            </label>
            <label for="multiplayer">
                <input type="radio" id="multiplayer" name="playerSetting" value="multiplayer"/>
                Multiplayer
            </label>
        </div>
       <button>Start Game</button>
    </div>
  );
};

export default SetGame;