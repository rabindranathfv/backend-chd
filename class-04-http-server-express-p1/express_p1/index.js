const express = require("express");

const listaUsuarios = require("./users.json");

const generos = ["f", "m"];

const PORT = 5000;

const app = express();

app.use(express.json()); // sin esto no podemos ver el req.body
app.use(express.urlencoded({ extended: true })); // sino se agrega no podremos tomar los parametros de la url del request, req.query

app.get("/", (request, response) => {
  response.send(`API ALIVE ${PORT}!!!!`);
});

app.get("/saludo", (req, res) => {
  res.send("HOLA ESTOY USANDO EXPRESS");
});

app.get(`/alive`, (req, res) => {
  res.json({ message: `Hola hiciste tu 1ra api, y esta ejecutandose` });
});

app.get(`/bienvenido/:nombre/:apellido/:edad`, (req, res) => {
  console.log("PARAMETROS!!", req.params, req.params.nombre);
  const { nombre, edad, apellido } = req.params;
  return res.json({
    ok: true,
    message: `hola mi es ${nombre} ${apellido} y tengo ${edad} anos, bienvenido a la API`,
  });
});

// filtrar por sexo como query param en URL
app.get(`/usuarios`, (req, res) => {
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
app.get(`/usuario/:userId`, (req, res) => {
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

app.post(`/usuario`, (req, res) => {
  const userBody = req.body;
  console.log("🚀 ~ file: index.js:31 ~ app.post ~ userBody", userBody);
  const lastId = listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id;
  const newUser = { id: lastId + 1, ...userBody };
  res.json({ ok: true, message: `usuario creado`, usuario: newUser });
});

// express().liste()
app.listen(PORT, () => {
  console.log(`API RUNNING ON PORT ${PORT}`);
});
