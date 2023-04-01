const passport = require("passport");
const jwt = require("passport-jwt");
const { SECRET_JWT } = require("../utils/jwt");

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookieJWTExtractor = (req) => {
  let token;
  if (req && req.cookies) {
    token = req.cookies["cookieToken"];
  }
  return token;
};

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieJWTExtractor]),
        secretOrKey: SECRET_JWT,
      },
      async (jwtPayload, done) => {
        try {
          console.log("JWT INFO ******", jwtPayload);
          return done(null, jwtPayload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

module.exports = initializePassport;
