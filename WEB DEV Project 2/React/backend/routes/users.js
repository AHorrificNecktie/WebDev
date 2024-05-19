// backend/routes/users.js

const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    let { username, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user and save to the database
    user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering new user' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;

        // Find the user by username
        let user = await User.findOne({ username });
        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // User authenticated successfully, create a token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // token will expire in 1 hour
        );

        res.json({ message: 'User logged in successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user' });
    }
});

module.exports = router;
