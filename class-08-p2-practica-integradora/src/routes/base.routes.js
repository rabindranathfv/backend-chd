const { Router } = require('express');

class BaseRoute {
  path = "/alive";
  router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  /**
   * initBaseRoutes
   */
  initBaseRoutes() {
    this.router.get(`${this.path}`, (req, res) => {
      res.status(200).json({ ok: true, message: `I AM API AND I AM ALIVE` });
    });
  }
}

module.exports = BaseRoute;
