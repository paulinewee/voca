// db.mjs
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//user
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List' // 'List' should match the name of the model you're referencing
  }],
  theme: String,
  color: String
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
