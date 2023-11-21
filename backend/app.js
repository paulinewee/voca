const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose model
const ListSchema = new mongoose.Schema({
  id: Number,
  language: String,
  name: String,
  played: {
    type: Number,
    default: 0,
  },
  difficulty: String,
  items: [
    {
      name: String,
      def: String,
    },
  ],
  scores: [
    {
      user: String,
      score: Number,
    },
  ],
});

const List = mongoose.model('List', ListSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/final', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes

// GET route for fetching lists
app.get('/api/lists', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    console.error('Error fetching lists:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// POST route for adding a new list
app.post('/api/list', async (req, res) => {
  try {
    console.log("items", req.body.items)
    const { id, language, name, difficulty, items } = req.body;

    // Validate that required fields are present
    if (!id || !language || !name || !difficulty || !items) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Split the string into pairs based on ','
    const pairs = items.split(', ');

    // Create a list of objects from the pairs
    const itemList = pairs.map(pair => {
      // Split each pair into name and definition based on ':'
      const [itemName, itemDef] = pair.split(':').map(part => part.trim());
      // Return an object with name and def properties
      return { name: itemName, def: itemDef };
    });

    // Create a new instance of the List model
    const newList = new List({
      id,
      language,
      name,
      difficulty,
      itemList,
    });

    // Save the document to the database
    await newList.save();

    // Respond with the saved list and no error
    res.status(201).json({ list: newList, error: null });
  } catch (error) {
    // Respond with an error if there's an exception
    console.error('Error saving list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
