import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    id: '',
    language: '',
    name: '',
    difficulty: '',
    items: [],
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemsChange = (e) => {
    // Split the input string into an array of items
    const itemsArray = e.target.value.split(',').map((item) => {
      const [name, def] = item.split(':').map((part) => part.trim());
      return { name, def };
    });

    setFormData({ ...formData, items: itemsArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/list', formData);
      console.log('Server response:', response.data);

      // Update the state with the submitted data
      setSubmittedData(response.data.game); // Assuming the server sends back the submitted data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Add your own vocabulary list</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" className="input-box" onChange={handleChange} required />
        </label>

        <label>
          Language:
          <input type="text" name="language" className="input-box" onChange={handleChange} required />
        </label>

        <label>
          Name:
          <input type="text" name="name" className="input-box" onChange={handleChange} required />
        </label>

        <label>
          Difficulty:
          <input type="text" name="difficulty" className="input-box" onChange={handleChange} required />
        </label>

        <label>
          Items:
          <input
            type="text"
            name="items"
            className="input-box"
            placeholder="word: definition, word: definition, word: definition"
            onChange={handleItemsChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data underneath the form */}
      {submittedData && (
        <div>
          <h3>Your Game Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
