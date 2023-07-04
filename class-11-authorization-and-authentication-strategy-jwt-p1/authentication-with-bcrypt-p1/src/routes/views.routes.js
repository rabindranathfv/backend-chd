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
  console.log("🚀 ~ file: views.routes.js:16 ~ router.get ~ user:", user);
  res.render("profile", {
    user,
    carrito: {
      carritoId: "carrito-1",
      productos: [{ productoId: "1", nombre: "camisa" }],
    },
  });
});

module.exports = router;
