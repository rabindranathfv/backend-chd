const coursesModel = require("../models/courses.model");

class CoursesManager {
  getAllCourses = async () => {
    try {
      const allCourses = await coursesModel.find({});

      return allCourses;
    } catch (error) {
      console.log(
        "🚀 ~ file: courses.manager.js:11 ~ CoursesManager ~ getAllCourses=async ~ error:",
        error
      );
    }
  };

  getCourseById = async (id) => {
    try {
      return await coursesModel.findById({ _id: id });
    } catch (error) {
      console.log(
        "🚀 ~ file: courses.manager.js:21 ~ CoursesManager ~ getCourseById= ~ error:",
        error
      );
    }
  };

  createCourses = async (courseBody) => {
    try {
      const checkCourse = await coursesModel.findOne({
        title: `${courseBody.title.toLowerCase()}`,
      });

      if (checkCourse) {
        return null;
      }

      const newCourse = await coursesModel.create({
        ...courseBody,
        title: courseBody.title.toLowerCase(),
      });

      return newCourse;
    } catch (error) {
      console.log(
        "🚀 ~ file: courses.manager.js:45 ~ CoursesManager ~ createCourses=async ~ error:",
        error
      );
    }
  };
}

module.exports = CoursesManager;
