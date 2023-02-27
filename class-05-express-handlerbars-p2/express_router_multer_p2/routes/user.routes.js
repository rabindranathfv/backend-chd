const { Router } = require("express");

const listaUsuarios = require("../users.json");

const generos = ["f", "m"];

const router = Router();

// filtrar por sexo como query param en URL
router.get(`/`, (req, res) => {
  console.log("Query PARAMS", req.query);
  const { sexo } = req.query;

  if (!sexo || !generos.includes((!sexo ? "" : sexo).toLocaleLowerCase())) {
    return res.json({
      ok: true,
      message: `el genero introducido no existe o es invalido`,
      queryParams: req.query,
    });
  }

  let listaFiltrada = listaUsuarios.usuarios.filter(
    (u) => u.sexo === sexo.toLocaleLowerCase()
  );
  return res.json({
    ok: true,
    message: `lista de usuarios`,
    usuarios: listaFiltrada,
  });
});

// // RUTA CON QUERY PARAMS, y PARAMS
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

router.post(`/`, (req, res) => {
  const userBody = req.body;
  console.log("🚀 ~ file: index.js:31 ~ router.post ~ userBody", userBody);
  const lastId = listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id;
  const newUser = { id: lastId + 1, ...userBody };
  res.json({ ok: true, message: `usuario creado`, usuario: newUser });
});

module.exports = router;
