const { Router } = require("express");
const router = Router();
const studentsData = require("../data/students");

const studentsModel = require("../model/student.model");

router.get("/insertion", async (req, res) => {
  try {
    let result = await studentsModel.insertMany(studentsData);
    return res.json({
      message: "all the students are inserted succesfully",
      students: result,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:15 ~ router.get ~ error:",
      error
    );
  }
});

module.exports = router;
