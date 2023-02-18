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

// path.join(`${__dirname}/public/uploads/`

const messages = [];
io.on("connection", (socket) => {
  console.log("Socket connected");

  // message channel
  socket.on("message", (data) => {
    console.log("🚀 ~ file: app.js:35 ~ socket.on ~ data", data);
    messages.push(data);
    console.log("🚀 ~ file: app.js:37 ~ socket.on ~ messages", messages);
    io.emit("messageLogs", messages);
  });

  // authenticated channel
  socket.on("authenticated", (data) => {
    console.log("🚀 ~ file: app.js:39 ~ socket.on ~ data", data);
    socket.broadcast.emit("newUserConnected", data);
  });
});
