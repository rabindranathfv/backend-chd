const fs = require("fs/promises");
const bcrypt = require("bcryptjs");

class ManagerUsuarios {
  constructor(ruta) {
    this.rutaDB = ruta;
  }

  async crearUsuarios(usuario) {
    console.log(
      "🚀 ~ file: ManagerUsuarios.js:12 ~ ManagerUsuarios ~ crearUsuarios ~ usuario",
      usuario
    );
    try {
      const { nombre, apellido, nombreUsuario, contrasena } = usuario;

      const listaUsuarios = await this.consultarUsuarios();
      const lastId =
        listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id + 1;

      const salt = bcrypt.genSalt();
      let contrasenaEncriptada = atob(contrasena);
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:25 ~ ManagerUsuarios ~ crearUsuarios ~ contrasenaEncriptada AQUI!!!!",
        contrasenaEncriptada
      );
      // TODO: Lo vemos en el AFTER CLASS
      // bcrypt.hash(contrasena, salt, (err, hash) => {
      //   if (err) {
      //     console.log(err);
      //   }
      //   contrasenaEncriptada = hash;
      // });
      const insertarUsuario = {
        nombre: nombre,
        apellido: apellido,
        nombreUsuario,
        contrasena: contrasenaEncriptada,
      };
      listaUsuarios.usuarios.push({ id: lastId, ...insertarUsuario });
      // TODO: revisar si es mejor utilizar Append en lugar de write
      return await fs.writeFile(this.rutaDB, JSON.stringify(listaUsuarios));
    } catch (error) {
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:17 ~ ManagerUsuarios ~ crearUsuarios ~ error",
        error
      );
    }
  }

  async consultarUsuarios() {
    try {
      const listaUsuarios = await fs.readFile(this.rutaDB);
      return JSON.parse(listaUsuarios);
    } catch (error) {
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:24 ~ ManagerUsuarios ~ consultarUsuarios ~ error",
        error
      );
    }
  }

  // TODO hacer en el after class
  async validarUsuario() {

  }
}

module.exports = ManagerUsuarios;
