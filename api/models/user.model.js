const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  intolerances: { type: [String], default: [] },
});

module.exports = mongoose.model('User', UserSchema);
