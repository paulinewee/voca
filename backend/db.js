// db.mjs
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mongoSanitize = require('mongo-sanitize');

dotenv.config();

//user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    set: (value) => mongoSanitize.sanitize(value), // Sanitize the username input
    unique: true, // Ensure uniqueness
    required: true, // Make the username required
  },
  password: String,
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List' // 'List' should match the name of the model you're referencing
  }],
  color: {
    type: String,
    default: "blue",
  },
});
//list
const listSchema = new mongoose.Schema({
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

const List = mongoose.model('List', listSchema);
const User = mongoose.model('User', userSchema);

// // Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = { User, List };
