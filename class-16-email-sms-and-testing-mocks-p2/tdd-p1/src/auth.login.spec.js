const { login } = require("./auth.login");

describe("Login", () => {
  it("No se proporcion el usuario entonces deberia retornar No se ha proporcionado un usuario ", () => {
    // parametros para recrear el escenario o los casos de prueba
    console.log = jest.fn();
    const result = login("", "123");

    // condiciones q deben cumplirse
    expect(result).toBe(null);
    expect(result).toBeFalsy();
    expect(console.log).toHaveBeenCalledWith(
      "No se ha proporcionado un usuario"
    );
  });

  it("should log an error message if no password is provided", () => {
    console.log = jest.fn();
    const result = login("coderUser", "");
    expect(console.log).toHaveBeenCalledWith(
      "No se ha proporcionado un password"
    );
    expect(result).toBe(undefined);
  });

  it("should log an error message if the user is incorrect", () => {
    console.log = jest.fn();
    const result = login("wrongUser", "123");
    expect(console.log).toHaveBeenCalledWith("Credenciales incorrectas");
    expect(result).toBe(false);
  });

  it("should log an error message if the password is incorrect", () => {
    console.log = jest.fn();
    const result = login("coderUser", "wrongPassword");
    expect(console.log).toHaveBeenCalledWith("Contraseña incorrecta");
    expect(result).toBe(false);
  });

  it("should log a success message if the user and password match", () => {
    console.log = jest.fn();
    const result = login("coderUser", "123");
    expect(console.log).toHaveBeenCalledWith("logueado");
    expect(result).toBe(true);
  });
});
