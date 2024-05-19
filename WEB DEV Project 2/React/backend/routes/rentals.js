
const express = require('express');
const Rental = require('../models/Rental');
const router = express.Router();

// Get all rentals
router.get('/', async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json({ success: true, data: rentals });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Add a new rental
router.post('/', async (req, res) => {
  try {
    const newRental = new Rental(req.body);
    const savedRental = await newRental.save();
    res.status(201).json({ success: true, data: savedRental });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
