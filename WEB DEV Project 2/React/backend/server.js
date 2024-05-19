console.log('MongoDB URI:', process.env.MONGODB_URI);
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const someProtectedRoute = require('./routes/SomeProtectedRoute');
const dbConnect = require('./utils/dbconnect.js');
const rentalsRouter = require('./routes/rentals');

const app = express();
const PORT = process.env.PORT || 3001;


const uri = 'mongodb://localhost:27017/Project2';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api', someProtectedRoute);
app.use('/api/rentals', rentalsRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/register', async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const newUser = new User({ username, password, email });
      await newUser.save();
      res.status(201).send('User created successfully');
    } catch (error) {
      res.status(500).send('Error creating user');
    }
  });