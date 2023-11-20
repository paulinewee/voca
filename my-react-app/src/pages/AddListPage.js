// pages/AddListPage.js
import React from 'react';
import AddListForm from '../components/AddListForm';
import Form from '../components/Form';

const AddListPage = ({ onAddList }) => {
  return (
    <div>
      <h2>Add List Page</h2>
      <AddListForm onAddList={onAddList} />

      <h2>Add and update your own Vocabulary List</h2>
      <p>Format is [(item1, def1), (item2, def2)]</p>

      <p>Resubmit to delete or modify it</p>
      <Form/>
    </div>
  );
};

export default AddListPage;
