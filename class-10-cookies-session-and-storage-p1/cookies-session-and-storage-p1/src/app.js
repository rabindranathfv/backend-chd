const express = require("express");
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars");
const displayRoutes = require("express-routemap");
const viewsRoutes = require("./routes/views.routes");
const cookiesRoutes = require("./routes/cookies.routes");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/views/", viewsRoutes);
app.use("/api/cookies/", cookiesRoutes);

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT}`);
});
