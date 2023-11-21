import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Fetch lists from the server when the component mounts
    const fetchLists = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/lists');
        setLists(response.data);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchLists();
  }, []);

  return (
    <div className="histlist">
      {lists.length === 0 ? (
        <p>No lists available.</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list._id} className="hl-entry">
              <h4>{list.language} {list.name}</h4>
              <p>Difficulty: {list.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistList;
