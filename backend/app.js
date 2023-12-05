const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const bcrypt = require('bcrypt');
const cors = require('cors');

const {User, List} = require('./db');

// Create Express app
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

    // Create a new instance of the List model
    const newList = new List({
      id,
      language,
      name,
      difficulty,
      items: items, // Use the array directly
    });

    // Save the document to the database
    await newList.save();

    // Respond with the saved list and no error
    res.status(201).json({ list: newList, error: null });
  } catch (error) {
    // Respond with an erroxr if there's an exception
    console.error('Error saving list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST route for login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username in the database
    const user = await User.findOne({ username });

    // Check if the user exists and the password is correct
    if (user && bcrypt.compareSync(password, user.password)) {
      console.log('Login successful');
      console.log('Authenticated User:', user);
      res.json({ user, message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST route for registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user in the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    console.log('Registration successful');
    console.log('Registered User:', newUser);
    res.json({ user: newUser, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
