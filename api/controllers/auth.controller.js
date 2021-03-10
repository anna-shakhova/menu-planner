const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const failAuth = (res, error) => res.status(401).json({ session: false, error });

const serializeUser = (user) => ({
  id: user.id,
  login: user.login,
});

const signUp = async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      login,
      email,
      password: hashedPassword,
    });

    req.session.user = serializeUser(user);
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res, { email: 'User with this email is already registered' });
  }

  return res.json({ session: true, login });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user)
      return failAuth(res, { email: `User with this email isn't registered yet` });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return failAuth(res, { password: 'The password is invalid' });

    req.session.user = serializeUser(user);
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res, err.message);
  }

  return res.json({ session: true, login: req.session.user.login });
};

const signOut = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    return res.json({ session: false });
  });
};

const getUserData = (req, res) => {
  res.json({ session: true, login: req?.session.user.login });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  getUserData,
};
