const { Router } = require("express");
const coursesModel = require("../dao/models/courses.model");
const CoursesManager = require("../dao/managers/courses.manager");

class CoursesRoutes {
  path = "/courses";
  router = Router();
  courseManager = new CoursesManager();

  constructor() {
    this.initCoursesRoutes();
  }

  initCoursesRoutes() {
    this.router.get(`${this.path}`, async (req, res) => {
      try {
        const allCourses = await this.courseManager.getAllCourses();

        return res.json({
          message: `get all the courses availables`,
          courses: allCourses,
          amountOfCourses: allCourses.lenght,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: courses.routes.js:25 ~ CoursesRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.get(`${this.path}/:courseId`, async (req, res) => {
      try {
        const id = req.params.courseId;
        const courseDetail = await this.courseManager.getCourseById(id);
        // TODO: Agregar validacion

        return res.json({
          message: `course details successfully`,
          course: courseDetail,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: courses.routes.js:43 ~ CoursesRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.post(`${this.path}`, async (req, res) => {
      try {
        const coursesBody = req.body;
        const newCourse = await this.courseManager.createCourses(coursesBody);
        // TODO AGREGAR VALIDACIONES
        if (!newCourse) {
          return res.json({
            message: `this course ${courseBody.title} is already created`,
          });
        }

        return res.json({
          message: `the course is created succesfully`,
          course: newCourse,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: courses.routes.js:43 ~ CoursesRoutes ~ this.router.post ~ error:",
          error
        );
      }
    });

    this.router.put(`${this.path}/:courseId`, async (req, res) => {
      const coursesBody = req.body;
      const { courseId } = req.params;
      // TODP: AGREGAR VALIDACIONES SOBRE EL BODY Y EL COURSE ID
      const updatedCourse = await coursesModel.updateOne(
        { _id: courseId },
        coursesBody
      );
      console.log(
        "🚀 ~ file: courses.routes.js:70 ~ CoursesRoutes ~ this.router.put ~ updatedCourse:",
        updatedCourse
      );

      // TODO: VALIDACION SI HAY PROBLEMAS ACTUALIZANDO

      return res.json({
        message: `course ${courseId} updated succesfully`,
        course: updatedCourse,
      });
    });
  }
}

module.exports = CoursesRoutes;
