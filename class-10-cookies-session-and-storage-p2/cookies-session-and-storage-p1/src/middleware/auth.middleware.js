const authMdw = (req, res, next) => {
  console.log("MIDDLEWARE**", req.session);
  if (req.session?.user || req.session?.admin) {
    return next();
  }

  return res.status(401).json({
    message: "Unauthorized access",
  });
};

module.exports = authMdw;
