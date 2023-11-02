// db.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Create a schema for the reviews
const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List' // 'List' should match the name of the model you're referencing
  }],
  theme: String,
  color: String
});

const listSchema = new mongoose.Schema({
  id: Number,
  language: String,
  name: String,
  played: Number,
  difficulty: String,
  items: [{
    name: String,
    def: String
  }],
  scores: [{
    user: String,
    score: Number
  }]
});

// Define a model based on the schema
const User = mongoose.model('User', userSchema);
// Define a model based on the schema
const List = mongoose.model('List', listSchema);

// Connect to the MongoDB database using the DSN from the .env file
mongoose.connect(process.env.DSN);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database');
});

export default db;
