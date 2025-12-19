module.exports = (req, res, next) => {
  //mock
  req.user = { id: "user-id-123" };
  next();
};
