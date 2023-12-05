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
        <ul className="flex flex-col gap-3 m-0 p-0">
          {lists.map((list) => (
            <li key={list._id} className="flex flex-col gap-1 border border-gray-300 p-3">
              <h4 className="m-0 p-0 font-semibold">{list.language} {list.name}</h4>
              <p className="m-0 p-0">Difficulty: {list.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistList;
