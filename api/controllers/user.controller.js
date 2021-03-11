const User = require('../models/user.model');

const getUserIntolerances = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id).select('intolerances');
    res.json({ intolerances: user.intolerances });
  } catch (err) {
    console.log(err);
  }
};

const setUserIntolerances = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.session.user.id, { intolerances: req.body.intolerances });
    res.json({});
  } catch (err) {
    console.log(err);
  }
};

const getUserAisles = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id).select('aislesNotToCheck');
    res.json({ aislesNotToCheck: user.aislesNotToCheck });
  } catch (err) {
    console.log(err);
  }
};

const setUserAisles = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.session.user.id, { aislesNotToCheck: req.body.aislesNotToCheck });
    res.json({});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserIntolerances,
  setUserIntolerances,
  getUserAisles,
  setUserAisles,
};
