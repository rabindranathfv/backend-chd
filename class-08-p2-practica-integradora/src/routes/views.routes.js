const { Router } = require("express");

class ViewsRoutes {
  path = "/views";
  router = Router();

  constructor() {
    this.initViewsRoutes();
  }

  initViewsRoutes() {
    this.router.get(`${this.path}/users`, async (req, res) => {
      let users = [
        { name: "prueba", lastName: "apellidoPrueba", dni: "12345678" },
      ];
      res.render("users", { users });
    });

    this.router.get(`${this.path}/courses`, async (req, res) => {
      let courses = [];
      res.render("courses", { courses });
    });
  }
}

module.exports = ViewsRoutes;
