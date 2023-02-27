const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const viewsRoute = require("./routes/views.routes");
const usersRoute = require("./routes/user.routes");

const PORT = 5000;

const app = express();

const BASE_PREFIX = "api";

// CONFIGURACION DE HANDELBARS
app.engine("handlebars", handlebars.engine());
app.set("views", path.join(`${__dirname}/views`));
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", viewsRoute);
app.use(`/${BASE_PREFIX}/users`, usersRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
