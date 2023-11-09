// pages/AddListPage.js
import React from 'react';
import AddListForm from '../components/AddListForm';

const AddListPage = ({ onAddList }) => {
  return (
    <div>
      <h2>Add List Page</h2>
      <AddListForm onAddList={onAddList} />
    </div>
  );
};

export default AddListPage;
