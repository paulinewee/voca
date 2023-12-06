// pages/AddListPage.js
import React, { useState } from 'react';
import Form from '../components/Form';
import Nav from '../components/Nav';
import History from "../components/History"
import axios from 'axios';

const AddListPage = ({ onAddList }) => {
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/lists');
      setLists(response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  return (
    <div>
      <Nav/>
      <Form onListSubmitted={fetchLists}/>
      <h2 className="text-xl font-semibold pt-4 pb-4">Your Lists</h2>
      <History lists={lists}/>
    </div>
  );
};

export default AddListPage;
