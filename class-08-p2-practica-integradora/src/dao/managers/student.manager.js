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

  getStudentById = async (id) => {
    try {
      const studentDetail = await studentsModel.findById({ _id: id });

      return studentDetail;
    } catch (error) {
      console.log(
        "🚀 ~ file: student.manager.js:22 ~ StudentManager ~ getStudentById= ~ error:",
        error
      );
    }
  };

  createStudent = async (bodyStudent) => {
    try {
      // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
      const studentDetail = await studentsModel.findOne({
        dni: bodyStudent.dni,
      });
      if (studentDetail && Object.keys(studentDetail).length !== 0) {
        return null;
      }

      const newStudent = await studentsModel.create(bodyStudent);
      // TODO: Manejar el error o si pasa algo mientras creo el documento de estudiante

      return newStudent;
    } catch (error) {
      console.log(
        "🚀 ~ file: student.manager.js:42 ~ StudentManager ~ createStudent= ~ error:",
        error
      );
    }
  };
}

module.exports = StudentManager;
