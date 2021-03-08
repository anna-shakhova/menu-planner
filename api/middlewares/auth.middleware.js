const authMiddleware = (req, res, next) => {
  console.log('file-auth.js req.session.user:', req.session.user);
  if (!req.session.user) {
    return res.json({ session: false, message: 'not authorize' });
  }
  next();
};

module.exports = authMiddleware;
