const { connect } = require("mongoose");
const { DB_HOST, DB_PORT, DB_NAME, DB_CNN } = require("../config/config");

const configConnection = {
  url: DB_CNN ?? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, // ,pomgp+svr
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

const mongoDBconnection = async () => {
  try {
    await connect(configConnection.url, configConnection.options);
    console.info(`=================================`);
    console.info(
      `======= URL: ${configConnection.url.substring(0, 10)} =======`
    );
    console.log(`=================================`);
  } catch (error) {
    console.log(
      "🚀 ~ file: mongo.config.js:15 ~ mongoDBconnection ~ error:",
      error
    );
    throw new Error(error);
  }
};

module.exports = {
  configConnection,
  mongoDBconnection,
};
