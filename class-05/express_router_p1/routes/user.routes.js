const { Router } = require("express");

const listaUsuarios = require("../users.json");

const generos = ["f", "m"];

const router = Router();

// /api/users

// /api/users/
router.get(`/`, (req, res) => {
  return res.json({
    ok: true,
    message: `lista de usuarios`,
    usuarios: listaUsuarios.usuarios,
  });
});

// // RUTA CON QUERY PARAMS, y PARAMS
// /api/users/:userId
router.get(`/:userId`, (req, res) => {
  console.log("PARAMS", req.params);
  const userId = req.params.userId;

  if (isNaN(userId)) {
    return res.status(400).json({
      ok: true,
      message: `no existe el usuario con el id ${userId}`,
      queryParams: req.query,
    });
  }

  const usuario = listaUsuarios.usuarios.find((u) => {
    return u.id === Number(userId);
  });

  if (!usuario) {
    return res.json({
      ok: true,
      message: `no existe el usuario con el id ${userId}`,
      usuario,
      queryParams: req.query,
    });
  }

  return res.json({ ok: true, message: `usuarios id: ${userId}`, usuario });
});

// /api/users/
router.post(`/`, (req, res) => {
  const userBody = req.body;
  console.log("🚀 ~ file: index.js:31 ~ router.post ~ userBody", userBody);
  const lastId = listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id;
  const newUser = { id: lastId + 1, ...userBody };
  res.json({ ok: true, message: `usuario creado`, usuario: newUser });
});

module.exports = router;
