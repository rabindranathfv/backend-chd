import mongoose from "mongoose";
import { PERSISTENCE } from "../config/config.js";

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "layerArchitectureDB3";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export let Products;

switch (PERSISTENCE) {
  case "MONGO":
    const connection = mongoose
      .connect(MONGO_URL)
      .then((conn) => {
        console.log("🚀 ~ file: factory.js:11 ~ CONECTADO!:");
      })
      .catch((err) => {
        console.log("🚀 ~ file: factory.js:14 ~ err:", err);
      });
    const { default: ProductServiceDao } = await import(
      "../repository/product.repository.js"
    );
    Products = ProductServiceDao;
    break;
  case "MEMORY":
    // TODO: Cargar el dao en memoria con await dynamic import
    console.log("LOAD MEMORY SERVICE***");
    const { default: ProductServiceDao2 } = await import(
      "../repository/product.repository.js"
    );
    Products = ProductServiceDao2;
    break;
}
