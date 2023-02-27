const express = require("express");
const userRoutes = require("./routes/user.routes");
const petsRoutes = require("./routes/pets.routes");

const PORT = 5000;

const app = express();

const BASE_PREFIX = "api";

app.use(express.json()); // sin esto no podemos ver el req.body
app.use(express.urlencoded({ extended: true })); // sino se agrega no podremos tomar los parametros de la url del request, req.query

app.use("/static", express.static(`${__dirname}/public`));

app.get(`/${BASE_PREFIX}/alive`, (req, res) => {
  res.json({ message: `Hola hiciste tu 1ra api, y esta ejecutandose` });
});

// /api/users --> userRoutes
app.use(`/${BASE_PREFIX}/users`, userRoutes);
app.use(`/${BASE_PREFIX}/pets`, petsRoutes);

app.listen(PORT, () => {
  console.log(`API RUNNING ON PORT ${PORT}`);
});
