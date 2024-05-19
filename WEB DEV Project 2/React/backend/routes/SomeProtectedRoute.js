// backend/routes/SomeProtectedRoute.js

const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate'); // Adjust path as necessary

router.get('/protected', authenticate, (req, res) => {
  // This route is protected
  res.json({ message: 'You have accessed a protected route' });
});

module.exports = router;
