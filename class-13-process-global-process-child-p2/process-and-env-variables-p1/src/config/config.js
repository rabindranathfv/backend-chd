const { config } = require("dotenv");

config({ path:
  `.env.${process.env.NODE_ENV || "development"}` });

const {
  APP_NAME,
  NODE_ENV,
  PORT,
  API_VERSION,
  ORIGIN,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} = process.env;

module.exports = {
  APP_NAME,
  NODE_ENV,
  PORT,
  API_VERSION,
  ORIGIN,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
};
