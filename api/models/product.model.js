const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User'},
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  units: { type: String, required: true },
  metricAmount: Number,
  metricUnits: String,
  bestBefore: Date,
});

module.exports = new mongoose.model('Product', ProductSchema);
