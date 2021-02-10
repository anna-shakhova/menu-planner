const errorMiddleware = (err, req, res) => {
  console.error(err);
  res.status(500)
};

module.exports = errorMiddleware;
