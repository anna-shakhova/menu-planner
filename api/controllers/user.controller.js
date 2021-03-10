const User = require('../models/user.model');

const getUserIntolerances = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id).select('intolerances');
    console.log(user);
    res.json({ intolerances: user.intolerances });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserIntolerances,
};
