const studentsModel = require("../models/students.models");

class StudentManager {
  getAllStudents = async () => {
    try {
      const studentsArr = await studentsModel.find({});
      return studentsArr;
    } catch (error) {
      console.log(
        "🚀 ~ file: students.routes.js:42 ~ StudentsRoutes ~ this.router.get ~ error:",
        error
      );
    }
  };

  getStudentById = async (id) => {};

  createStudent = async (bodyStudent) => {};
}

module.exports = StudentManager;
