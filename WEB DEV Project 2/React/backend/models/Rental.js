const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    Category: {
      type: String,
      required: true
    },
    Name: {
      type: String,
      required: true
    },
    Registration: {
      type: String,
      required: true
    },
    Automatic: {
      type: Boolean,
      required: true
    },
    Rental_Start: {
      type: Date,
      required: true
    },
    Rental_End: {
      type: Date,
      required: true
    }
  });
  

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
