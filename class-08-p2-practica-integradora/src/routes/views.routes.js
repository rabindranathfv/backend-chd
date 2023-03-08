const { Router } = require("express");
const CoursesManager = require("../dao/managers/courses.manager");
const StudentManager = require("../dao/managers/student.manager");

class ViewsRoutes {
  path = "/views";
  router = Router();
  studentManager = new StudentManager();
  coursesManager = new CoursesManager();

  constructor() {
    this.initViewsRoutes();
  }

  initViewsRoutes() {
    this.router.get(`${this.path}/students`, async (req, res) => {
      // let students = [
      //   { name: "prueba", lastName: "apellidoPrueba", dni: "12345678" },
      // ];
      const students = await this.studentManager.getAllStudents();
      const mappedStudents = students.map((st) => {
        return {
          name: st.name,
          lastName: st.lastName,
          dni: st.dni,
        };
      });
      res.render("students", { students: mappedStudents });
    });

    this.router.get(`${this.path}/courses`, async (req, res) => {
      // let courses = [];
      const courses = await this.coursesManager.getAllCourses();
      const coursesMapped = courses.map((course) => {
        return {
          title: course.title,
        };
      });
      res.render("courses", { courses: coursesMapped });
    });
  }
}

module.exports = ViewsRoutes;
