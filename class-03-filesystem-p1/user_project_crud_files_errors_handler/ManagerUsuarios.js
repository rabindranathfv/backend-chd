const fs = require("fs/promises");

class ManagerUsuarios {
  constructor(ruta) {
    this.rutaDB = ruta;
  }

  async crearUsuarios(usuario) {
    try {
      const { nombre, apellido, edad } = usuario;

      const listaUsuarios = await this.consultarUsuarios();
      const lastId =
        listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id + 1;

      const insertarUsuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        curso: usuario.curso,
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
}

module.exports = ManagerUsuarios;
