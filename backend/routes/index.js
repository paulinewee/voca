// routes/index.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const {User, List} = require('../db');


// Example in-memory data store
let formDataStore = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express server is running');
});

// Get all form submissions
router.get('/formData', function(req, res, next) {
  res.json(formDataStore);
});

// Add a new form submission
router.post('/addData', function(req, res, next) {
  const newFormData = req.body;
  newFormData.id = formDataStore.length + 1; // Simple auto-incrementing ID

  formDataStore.push(newFormData);

  res.json({ message: 'Data added successfully', data: newFormData });
});

// Update form submission by ID
router.post('/updateData', function(req, res, next) {
  const { id } = req.params;
  const updatedFormData = req.body;

  formDataStore = formDataStore.map(data => (data.id == id ? { ...data, ...updatedFormData } : data));

  res.json({ message: 'Data updated successfully', data: updatedFormData });
});

// Delete form submission by ID
router.delete('/deleteData/:id', function(req, res, next) {
  const { id } = req.params;

  formDataStore = formDataStore.filter(data => data.id != id);

  res.json({ message: 'Data deleted successfully', deletedId: id });
});


router.post('/api/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password });

    // Save the user to the database
    await newUser.save();

    res.json({ user: newUser, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;