const path = require("path");
const ManagerUsuarios = require("./ManagerUsuarios");

const projectoUsuarios = async () => {
  console.log("index userProject");

  try {
    const rutaBase = path.join(`${__dirname}/db.json`);
    const Manager = new ManagerUsuarios(rutaBase);
    const listaUsarios = await Manager.consultarUsuarios();
    console.log(
      "🚀 ~ file: ManagerUsuarios.js:47 ~ listaUsarios",
      listaUsarios
    );

    const usuarioPrueba = {
      nombre: "Arturo",
      apellido: "Hermida",
      nombreUsuario: "ahermida",
      contrasena: "123456",
    };
    const nuevoUsuario = await Manager.crearUsuarios(usuarioPrueba);
    console.log('🚀 ~ file: index.js:23 ~ projectoUsuarios ~ nuevoUsuario', nuevoUsuario);
  } catch (error) {
    console.log("🚀 ~ file: index.js:20 ~ projectoUsuarios ~ error", error);
  }
};

projectoUsuarios();
