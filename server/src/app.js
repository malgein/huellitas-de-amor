const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./Routes/index.js");
const cors = require("cors"); // Agregamos el middleware cors
const process = require("process");
require("./db.js");


const server = express();

process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Promise Rejection:", reason);
	console.error("Promise:", promise);
  // Agrega un manejo adicional de errores aquí si es necesario
});

server.name = "API";

// Middlewares
server.use(cors()); // Usamos el middleware cors
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

// CORS configuration
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Custom middleware for handling OPTIONS requests
server.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Routes
server.use("/", routes);

// Error handling middleware
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
