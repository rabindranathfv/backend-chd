const { Router } = require("express");

const router = Router();

router.get("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== "rabin" || password !== "123456") {
    return res.json({ message: "login fallido " });
  }

  req.session.user = username;
  req.session.admin = true;
  return res.json({
    message: "login success",
  });
});

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.json({ message: `logout successfully` });
    return res.send({ message: `logout Error`, body: err });
  });
});

router.get("/welcome", async (req, res) => {
  // /welcome?name = rabin
  const { name } = req.query;
  console.log("🚀 ~ file: session.routes.js:29 ~ router.get ~ name:", name);

  const counter = req.session?.counter;
  if (!counter) {
    req.session.counter = 1;
    return res.send(`Te damos la bienvenida ${name}`);
  }

  req.session.user = name;
  req.session.admin = true;
  req.session.counter++;
  return res.send(
    `has ingresado ${name} exitosamente, unas ${req.session.counter} veces`
  );
});

module.exports = router;
