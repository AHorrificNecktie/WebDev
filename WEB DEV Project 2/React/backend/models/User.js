const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Pre-save hook to hash the password before saving it to the database
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

// Method to check the entered password against the stored hash
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
