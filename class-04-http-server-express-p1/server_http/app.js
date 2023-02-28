const http = require("http");

const PORT = 8080;

const server = http.createServer((request, response) => {
  response.end("!Mi primer hola mundo desde backend");
});

server.listen(PORT, () => {
  console.log(`🚀 ~ ESCUCHANDO PETICIONES EN EL PUERTO :${PORT}`);
});
