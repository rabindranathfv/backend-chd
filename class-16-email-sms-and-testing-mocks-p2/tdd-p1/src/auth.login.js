export const login = (user, password) => {
  if (!user) {
    console.log("No se ha proporcionado un usuario");
    return null;
  }

  if (!password) {
    console.log("No se ha proporcionado un password");
    return undefined;
  }

  if (user !== "coderUser") {
    console.log("Credenciales incorrectas");
    return false;
  }

  if (password !== "123") {
    console.log("Contraseña incorrecta");
    return false;
  }

  console.log("logueado");
  return true;
};
