import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

import db from './db.mjs';
const User = db .model('User');
const List = db.model('List');

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(process.env.PORT || 3000);