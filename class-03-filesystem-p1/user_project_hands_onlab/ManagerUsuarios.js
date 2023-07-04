const fs = require("fs/promises");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

class ManagerUsuarios {
  constructor(ruta) {
    this.rutaDB = ruta;
  }

  async crearUsuarios(usuario) {
    try {
      const validacion = await this.validarUsuario(usuario);
      const { error, value } = validacion;
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:13 ~ ManagerUsuarios ~ crearUsuarios ~ validacion",
        error,
        value
      );
      const { nombre, apellido, nombreUsuario, contrasena } = usuario;

      const listaUsuarios = await this.consultarUsuarios();
      const lastId =
        listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id + 1;

      const salt = await bcrypt.genSalt();
      let contrasenaEncriptada = await bcrypt.hashSync(contrasena, salt);
      const insertarUsuario = {
        nombre: nombre,
        apellido: apellido,
        nombreUsuario,
        contrasena: contrasenaEncriptada,
      };
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:29 ~ ManagerUsuarios ~ crearUsuarios ~ insertarUsuario",
        insertarUsuario
      );
      listaUsuarios.usuarios.push({ id: lastId, ...insertarUsuario });
      // TODO: revisar si es mejor utilizar Append en lugar de write
      await fs.writeFile(this.rutaDB, JSON.stringify(listaUsuarios));
      return { id: lastId, ...insertarUsuario };
    } catch (error) {
      console.log(
        "🚀 ~ file: ManagerUsuarios.js:44 ~ ManagerUsuarios ~ crearUsuarios ~ error",
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
  async validarUsuario(usuario) {
    try {
      // Mínimo 8 caracteres, al menos una letra y un número
      const schema = Joi.object({
        nombre: Joi.string().required(),

        apellido: Joi.string().required(),

        nombreUsuario: Joi.string().required(),

        contrasena: Joi.string().min(6).alphanum().required(),
      });

      return await schema.validateAsync(usuario);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ManagerUsuarios;
