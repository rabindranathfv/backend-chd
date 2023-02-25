const express = require("express");
const handlebars = require("express-handlebars");
const { Server } = require("socket.io");
const path = require("path");

const viewsRoute = require("./routes/views.routes");

const PORT = 5000;

const app = express();

// CONFIGURACION DE HANDELBARS
app.engine("handlebars", handlebars.engine());
app.set("views", path.join(`${__dirname}/views`));
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", viewsRoute);

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = new Server(server);

const logs = [];
io.on("connection", (socket) => {
  console.log("a new client is Connected");
  //canal1 se utiliza para la primera fase del ejercicio
  socket.on("messageByCharacter", (data) => {
    console.log("🚀 ~ file: app.js:37 ~ socket.on ~ data", data);
    io.emit("log", data);
  });

  // //canl2 se utiliza para la parte de almacenar y devolver los logs completos.
  socket.on("messageBySocket", (data) => {
    console.log("🚀 ~ file: app.js:42 ~ socket.on ~ data", data);
    logs.push({ socketid: `${socket.id}-`, message: data });
    // aplicar alguna logica en base la data, el usuario y otros parametros
    io.emit("log", { logs });
  });

  socket.broadcast.emit(
    "messageForEveryone",
    "ESTE MENSAJE SE HACE EN BROADCAST PARA TODOS EXCEPTO AL SOCKET QUE RECIBE"
  );

  io.emit("messageAll", "SALUDOS DESDE EL BACKEND");
});
