const { Router } = require("express");
const studentsModel = require("../models/students.model.js");

const router = Router();

router.get("/students", async (req, res) => {
  const { page = 1 } = req.query; // extrae el query param page y sino viene el valor por defecto es 1
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } =
    await studentsModel.paginate({}, { limit: 10, page, lean: true });
  res.render("students", {
    students: docs,
    page,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
  });
});

module.exports = router;
