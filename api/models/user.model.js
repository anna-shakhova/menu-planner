const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = new mongoose.model('User', UserSchema);
