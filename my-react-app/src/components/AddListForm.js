// components/AddListForm.js
import React, { useState } from 'react';

const AddListForm = ({ onAddList }) => {
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    // Add list creation logic here
    onAddList(listName);
  };

  return (
    <div>
      <label>
        List Name:
        <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddList}>Add List</button>
    </div>
  );
};

export default AddListForm;
