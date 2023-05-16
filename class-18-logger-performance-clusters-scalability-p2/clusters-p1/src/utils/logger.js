import winston from "winston";

// Configuración del devLogger
const devLogger = winston.createLogger({
  level: "verbose",
  transports: [new winston.transports.Console()],
});

// Configuración del prodLogger
const prodLogger = winston.createLogger({
  level: "http",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "warn" }),
  ],
});

export function setLogger(req, res, next) {
  if (process.env.NODE_ENV === "production") {
    req.logger = prodLogger;
  } else {
    req.logger = devLogger;
  }
  next();
}
