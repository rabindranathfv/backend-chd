const { Router } = require("express");

const studentsModel = require("../dao/models/students.models");

const studentsData = require("../db/students");
const StudentManager = require("../dao/managers/student.manager");

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
        const studentDetail = await this.studentManager.getStudentById(
          studentId
        );
        // TODO AGREGAR VALIDACION

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
        const newStudent = await this.studentManager.createStudent(studentBody);
        if (!newStudent) {
          return res.json({
            message: `the student with dni ${studentBody.dni} is already register`,
          });
        }

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
