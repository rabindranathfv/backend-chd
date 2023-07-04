const App = require("./app");
const BaseRoute = require("./routes/base.routes");
const CoursesRoutes = require("./routes/courses.routes");
const StudentsRoutes = require("./routes/students.routes");
const viewsRoutes = require("./routes/views.routes");

const app = new App([
  new BaseRoute(),
  new CoursesRoutes(),
  new StudentsRoutes(),
  new viewsRoutes(),
]);

app.listen();
