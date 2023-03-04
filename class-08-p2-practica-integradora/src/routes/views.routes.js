const { Router } = require("express");

class ViewsRoutes {
  path = "/views";
  router = Router();

  constructor() {
    this.initViewsRoutes();
  }

  initViewsRoutes() {
    this.router.get(`${this.path}/students`, async (req, res) => {
      let students = [
        { name: "prueba", lastName: "apellidoPrueba", dni: "12345678" },
      ];
      res.render("students", { students });
    });

    this.router.get(`${this.path}/courses`, async (req, res) => {
      let courses = [];
      res.render("courses", { courses });
    });
  }
}

module.exports = ViewsRoutes;
