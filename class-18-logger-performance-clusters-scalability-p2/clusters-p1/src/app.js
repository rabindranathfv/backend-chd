import express from "express";
import displayRoutes from "express-routemap";
import os from "os";
import cluster from "cluster";

const app = express();

const PORT_APP = 5000;

if (cluster.isPrimary) {
  // Si el proceso actual es el proceso primario
  const numWorkers = os.cpus().length;
  console.log('🚀 ~ file: app.js:13 ~ numWorkers:', numWorkers);

  // Crear workers
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  // Configurar listeners para crear nuevos workers si alguno falla
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `****CREATE NEW Worker ${worker.process.pid} died with code ${code} and signal ${signal}****`
    );
    console.log("Creating a new worker");
    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    return res.send({ worker: ` el worker con id ${process.pid}` });
  });

  // Si el proceso actual es un worker
  app.listen(PORT_APP, () => {
    displayRoutes(app);
    console.log(`Worker ${process.pid} listening on ${PORT_APP}`);
  });
}
