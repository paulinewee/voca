import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/updateData', formData);
      console.log('Server response:', response.data);

      // Update the state with the submitted data
      setSubmittedData(response.data.data); // Assuming the server sends back the submitted data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="list" onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data underneath the form */}
      {submittedData && (
        <div>
          <h3>Your Vocabulary List:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
