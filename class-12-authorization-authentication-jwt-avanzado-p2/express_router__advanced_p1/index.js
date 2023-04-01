const express = require("express");
const petRoutes = require("./routes/pets.routes");

const PORT = 5000;

const app = express();

const BASE_PREFIX = "api";

app.use(express.json()); // sin esto no podemos ver el req.body
app.use(express.urlencoded({ extended: true })); // sino se agrega no podremos tomar los parametros de la url del request, req.query

app.use("/static", express.static(`${__dirname}/public`));

app.use(`/${BASE_PREFIX}/pets`, petRoutes);

app.listen(PORT, () => {
  console.log(`API RUNNING ON PORT ${PORT}`);
});
