const jwt = require("jsonwebtoken");
const { SECRET_JWT } = require("../utils/jwt");

const authToken = (req = request, res = response, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      ok: false,
      msg: "not Authenticated available",
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    console.log(
      "🚀 ~ file: auth-token.middleware.js:15 ~ authToken ~ EXTRACCION DEL TOKEN EN EL MIDDLEWARE******",
      token
    );
    const data = jwt.verify(token, SECRET_JWT);
    req.user = {
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      email: data.user.email,
      age: data.user.age,
    };

    req.token = token;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      ok: false,
      msg: "invalid authorization, Unauthorized",
    });
  }
};

module.exports = {
  authToken,
};
