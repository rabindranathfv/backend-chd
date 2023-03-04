const { Router } = require("express");

const studentsModel = require("../models/students.models");

const studentsData = require("../db/students");
const StudentManager = require("../managers/student.manager");

class StudentsRoutes {
  path = "/students";
  router = Router();
  studentManager = new StudentManager();

  constructor() {
    this.initStudentsRoutes();
  }

  initStudentsRoutes() {
    this.router.get(`${this.path}/insertion`, async (req, res) => {
      try {
        const students = await studentsModel.insertMany(studentsData);
        // TODO: agregar validaciones

        return res.json({
          message: "students insert successfully",
          studentsInserted: students,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:25 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.get(`${this.path}`, async (req, res) => {
      try {
        // TODO: agregar validaciones
        const studentsArr = await this.studentManager.getAllStudents();
        return res.json({
          message: `get all students succesfully`,
          studentsLists: studentsArr,
          studentsAmount: studentsArr.length,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:44 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.get(`${this.path}/:studentId`, async (req, res) => {
      try {
        const { studentId } = req.params;
        const studentDetail = await studentsModel.findById({ _id: studentId });

        return res.json({
          message: `get student info of ${studentId} succesfully`,
          student: studentDetail,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:60 ~ StudentsRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.post(`${this.path}`, async (req, res) => {
      try {
        // TODO: HACER VALIDACIONES DEL BODY
        const studentBody = req.body;

        // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
        const studentDetail = await studentsModel.findOne({
          dni: studentBody.dni,
        });
        if (studentDetail && Object.keys(studentDetail).length !== 0) {
          return res.json({
            message: `the student with dni ${studentBody.dni} is already register`,
          });
        }

        const newStudent = await studentsModel.create(studentBody);
        // TODO: Manejar el error o si pasa algo mientras creo el documento de estudiante

        return res.json({
          message: `student created successfully`,
          student: newStudent,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: students.routes.js:79 ~ StudentsRoutes ~ this.router.post ~ error:",
          error
        );
      }
    });
  }
}

module.exports = StudentsRoutes;
