import winston from "winston";

// Configuración del devLogger
const devLogger = winston.createLogger({
  level: "verbose",
  transports: [new winston.transports.Console()],
});

const qaLogger = winston.createLogger({
  level: "verbose",
  transports: [new winston.transports.Console()],
});

// Configuración del prodLogger
const prodLogger = winston.createLogger({
  level: "http",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "errors.log", level: "warn" }),
  ],
});

const loggersLevels = {
  production: prodLogger,
  development: devLogger,
  qa: qaLogger
};

export function setLogger(req, res, next) {
  // if (process.env.NODE_ENV === "production") {
  //   req.logger = prodLogger;
  // } else {
  //   req.logger = devLogger;
  // }

  req.logger = loggersLevels[`${process.env.NODE_ENV}`];
  next();
}
