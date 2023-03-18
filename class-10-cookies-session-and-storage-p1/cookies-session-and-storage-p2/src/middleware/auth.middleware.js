const authMdw = (req, res, next) => {
  if (req.session?.user === "rabin" || req.session?.admin) {
    return next();
  }

  return res.status(401).json({
    message: "Unauthorized access",
  });
};

module.exports = authMdw;
