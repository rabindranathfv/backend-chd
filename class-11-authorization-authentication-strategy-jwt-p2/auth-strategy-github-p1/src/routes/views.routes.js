const { Router } = require("express");
const authMdw = require("../middleware/auth.middleware");

const router = Router();

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/register", async (req, res) => {
  res.render("register");
});

router.get("/recover", async (req, res) => {
  res.render("recover");
});

router.get("/profile", authMdw, async (req, res) => {
  const user = req.session.user;
  res.render("profile", {
    last_name: user.last_name || user.first_name,
    age: user.age,
    email: user.email,
  });
});

module.exports = router;
