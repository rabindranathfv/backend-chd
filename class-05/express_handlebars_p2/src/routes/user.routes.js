const { Router } = require("express");

let users = [
  {
    name: "jose",
    lastName: "Espinoza",
    age: 26,
    phone: "5541231355",
    email: "jespinoza@correo.com",
  },
  {
    name: "Marisol",
    lastName: "gardel",
    age: 23,
    phone: "15431231355",
    email: "mgardel@correo.com",
  },
  {
    name: "leonel",
    lastName: "Velez",
    age: 28,
    phone: "4331234155",
    email: "lvelez@correo.com",
  },
  {
    name: "Carlos",
    lastName: "Costa",
    age: 18,
    phone: "1233315451",
    email: "ccosta@correo.com",
  },
  {
    name: "Valeria",
    lastName: "Duarte",
    age: 45,
    phone: "66521233",
    email: "vduarte@correo.com",
  },
];

const router = Router();

router.get(`/`, (req, res) => {
  return res.json({
    ok: true,
    message: `lista de usuarios`,
    usuarios: users,
  });
});

router.post(`/`, (req, res) => {
  console.log("🚀 ~ file: index.js:53 ~ router.post ~ userBody", req.body);
  const userBody = req.body;
  const newUser = { ...userBody };
  users.push(newUser);
  console.log("🚀 ~ file: user.routes.js:56 ~ router.post ~ newUser", newUser);

  res.json({ ok: true, message: `usuario creado`, usuario: newUser });
});

module.exports = router;
