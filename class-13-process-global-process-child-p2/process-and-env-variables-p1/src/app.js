const { Command } = require("commander");
const { NODE_ENV, PORT, APP_NAME } = require("./config/config");

console.log("************Directorio de uso del proceso***", process.cwd());

console.log("************Id del proceso de ejecucion de Node***", process.pid);

console.log(
  "************Cantidad de memoria utilizada por el proceso***",
  process.MemoryUsage
);

console.log("************Objecto del entorno de proceso***", process.env);

console.log("************Version del proceso***", process.version);

console.log(
  "************argumentos del procesos pasados por CLI***",
  process.argv
);

const program = new Command();

program
  .option("-d", "variable para debug", false)
  .option("-p <port>", "puerto del servidor", 8080);

program.parse();

console.log("********* OPTIONS: ******", program.opts());
console.log("********* ARGUMENTS: ******", program.args);

console.log('API MODE', NODE_ENV, PORT, APP_NAME)
