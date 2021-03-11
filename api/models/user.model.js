const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  intolerances: { type: [String], default: [] },
  aislesNotToCheck: { type: [String], default: ['Spices and Seasonings'] },
});

module.exports = mongoose.model('User', UserSchema);
