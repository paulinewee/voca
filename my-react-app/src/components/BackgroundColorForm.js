// components/BackgroundColorForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BackgroundColorForm = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('blue-300'); // Default color

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your Express backend to update the user's color
    try {
      const response = await axios.post('http://localhost:3001/api/updateColor', { color: selectedColor });
      if (response.data.success) {
        // If the update was successful, call the onColorChange function and pass the selected color
        onColorChange(selectedColor);
      } else {
        // Handle the case where the update failed (show an error message, etc.)
        console.error('Color update failed.');
      }
    } catch (error) {
      console.error('Error updating color:', error);
    }
  };

  const colorOptions = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'white'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <select
        id="backgroundColor"
        value={selectedColor}
        onChange={handleColorChange}
        className="border border-gray-300 rounded-md p-2"
      >
        {colorOptions.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md ml-2">
        Change Color
      </button>
    </form>
  );
};

export default BackgroundColorForm;
