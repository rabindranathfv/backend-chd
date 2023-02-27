const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const PORT = 5000;

const app = express();

const users = [
  {
    name: "jose",
    lastName: "Espinoza",
    age: 26,
    phone: "5541231355",
    email: "jespinoza@correo.com",
  },
  {
    name: "Marisol",
    lastName: "gardel",
    age: 23,
    phone: "15431231355",
    email: "mgardel@correo.com",
  },
  {
    name: "leonel",
    lastName: "Velez",
    age: 28,
    phone: "4331234155",
    email: "lvelez@correo.com",
  },
  {
    name: "Carlos",
    lastName: "Costa",
    age: 18,
    phone: "1233315451",
    email: "ccosta@correo.com",
  },
  {
    name: "Valeria",
    lastName: "Duarte",
    age: 45,
    phone: "66521233",
    email: "vduarte@correo.com",
  },
];

// CONFIGURACION DE HANDELBARS
app.engine("handlebars", handlebars.engine());
app.set("views", path.join(`${__dirname}/views`));
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/saludo", (req, res) => {
//   const random = Math.floor(Math.random() * users.length);
//   res.render("index", { name: users[random].name });
// });

app.get("/", (req, res) => {
  const random = Math.floor(Math.random() * users.length);
  const userRender = users[random];
  console.log("🚀 ~ file: app.js:66 ~ app.get ~ userRender", userRender);
  res.render("users", { user: userRender });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
