// Require the mongoose package
const mongoose = require('mongoose');

// Define the car schema
const carSchema = new mongoose.Schema({
  // Define the schema based on your CSV fields and data types
  Grupa: String,
  SIPP_Code: String,
  Category: String,
  Name: String,
  Automatic: Boolean,
  Registration: String,
  R_Expiry: String,
  Last_Service_KM: String,
  Last_Service_Date: String,
  Mileage: String
  // Add other fields as needed...
});

// Compile the model from the schema
// The `mongoose.models.Car ||` part is used to avoid recompiling the model when hot-reloading in development
module.exports = mongoose.models.Car || mongoose.model('Car', carSchema);

