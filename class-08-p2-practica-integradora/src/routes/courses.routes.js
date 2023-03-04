const { Router } = require("express");
const coursesModel = require("../models/courses.model");

class CoursesRoutes {
  path = "/courses";
  router = Router();

  constructor() {
    this.initCoursesRoutes();
  }

  initCoursesRoutes() {
    this.router.get(`${this.path}`, async (req, res) => {
      const allCourses = await coursesModel.find({});

      return res.json({
        message: `get all the courses availables`,
        courses: allCourses,
        amountOfCourses: allCourses.lenght,
      });
    });

    this.router.get(`${this.path}/:courseId`, async (req, res) => {
      const id = req.params.courseId;
      const courseDetail = await coursesModel.findById({ _id: id });
      // TODO: Agregar validacion

      return res.json({
        message: `course details successfully`,
        course: courseDetail,
      });
    });

    this.router.post(`${this.path}`, async (req, res) => {
      try {
        const coursesBody = req.body;

        const checkCourse = await coursesModel.findOne({
          title: `${coursesBody.title.toLowerCase()}`,
        });

        if (checkCourse) {
          return res.json({
            message: `this cuorse ${coursesBody.title} is already created`,
          });
        }

        const newCourse = await coursesModel.create({
          ...coursesBody,
          title: coursesBody.title.toLowerCase(),
        });

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
