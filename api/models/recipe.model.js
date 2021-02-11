const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true },
  imagelink: { type: String, required: true },
  ingredients: [{
    name: String,
    amount: Number,
    units: String,
  }],
  spoonacular_id: { type: Number, required: true },
  instructions: [{
    number: Number,
    description: String,
  }],
  readyInMinutes: Number,
  servings: Number,
});

module.exports = new mongoose.model('Recipe', RecipeSchema);
