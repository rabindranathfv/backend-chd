const socket = io();

let user;
const chatbox = document.getElementById("chatbox");

Swal.fire({
  title: "BIENVENIDO, por favor Identificate",
  input: "text",
  allowOutsideClick: false,
}).then((result) => {
  user = result.value;
  socket.emit("authenticated", user);
});

chatbox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatbox.value.trim().length > 0) {
      socket.emit("message", { user: user, message: chatbox.value });
      chatbox.value = "";
    }
  }
});

socket.on("messageLogs", (data) => {
  console.log("🚀 ~ file: chat.js:30 ~ socket.on ~ data", data);
  if (!user) return;
  let log = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((msg) => {
    messages += `${msg.user} dice: ${msg.message}<br/>`;
  });
  log.innerHTML = messages;
});

socket.on("newUserConnected", (data) => {
  if (!user) return;
  Swal.fire({
    title: `el ${data} ha iniciado sesion`,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: "success",
  });
});
