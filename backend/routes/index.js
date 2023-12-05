// routes/index.js

const express = require('express');
const router = express.Router();
const cors = require('cors');

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


module.exports = router;