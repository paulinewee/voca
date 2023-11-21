// pages/AddListPage.js
import React from 'react';
import Form from '../components/Form';
import Nav from '../components/Nav';
import History from "../components/History"

const AddListPage = ({ onAddList }) => {
  return (
    <div>
      <Nav/>
      <Form/>
      <History/>
    </div>
  );
};

export default AddListPage;
