const socket = io();

// Part I: send data character by character
// const input = document.getElementById("textbox");
// const log = document.getElementById("log");
// input.addEventListener("keyup", (evt) => {
//   let { key } = evt;
//   evt.target.value = "";
//   console.log("🚀 ~ file: home.js:12 ~ input.addEventListener ~ key", key);
//   // envio la data al backend por el canal messageByCharacter
//   socket.emit("messageByCharacter", key);
// });

// socket.on("log", (data) => {
//   // log.innerHTML += data;
//   log.innerHTML = log.innerHTML + " " + data;
// });

// Part II: USING SOCKETS
const input = document.getElementById("textbox");
const log = document.getElementById("log");
input.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    socket.emit("messageBySocket", input.value);
    input.value = "";
  }
});

socket.on("log", (data) => {
  let logs = "";
  data.logs.forEach((log) => {
    logs += `${log.socketid} dice: ${log.message}<br/>`;
  });
  log.innerHTML = logs;
});

socket.on("messageForEveryone", (data) => {
  console.log("🚀 ~ file: home.js:34 ~ socket.on ~ data", data);
});
