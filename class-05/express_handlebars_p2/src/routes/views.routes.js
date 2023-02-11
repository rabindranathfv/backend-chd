const { Router } = require("express");

const listaUsuarios = require("../users.json");

const router = Router();

router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;
