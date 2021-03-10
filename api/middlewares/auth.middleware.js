const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.json({ session: false });
  }
  next();
};

module.exports = authMiddleware;
