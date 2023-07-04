const passport = require("passport");

function handlePolicies(policies) {
  return (req, res, next) => {
    // Verificar si la única política es "PUBLIC"
    if (policies.length === 1 && policies[0] === "PUBLIC") {
      return next();
    }

    // Usar Passport para autenticar al usuario y verificar el rol
    passport.authenticate("jwt", { session: false }, (err, userJWT, info) => {
      console.log(
        "🚀 ~ file: handle-policies.middleware.js:12 ~ passport.authenticate ~ userJWT:",
        userJWT
      );
      if (err) {
        return next(err);
      }
      if (!userJWT) {
        return res
          .status(401)
          .send({ message: "Acceso denegado. Token inválido o expirado." });
      }
      if (policies.includes(userJWT.user.role)) {
        req.user = userJWT;
        return next();
      } else {
        return res
          .status(403)
          .send({ message: "Acceso denegado. Rol no autorizado." });
      }
    })(req, res, next);
  };
}

module.exports = handlePolicies;
