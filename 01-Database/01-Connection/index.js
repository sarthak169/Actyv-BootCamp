/**
 * Requiring the mongoose library.
 */
const mongoose = require("mongoose");

/**
 * Importing the log4js library.
 */
const { logger } = require("../Logger/index");

/**
 * Importing the env variables.
 */
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  useUnifiedTopology: true,
  poolSize: 10
};

/**
 * Fetching the mongoURI from the env variables.
 */
mongoose.connect(process.env.mongoURI, options);

/**
 * Establishing the connection
 */
mongoose.connection.on("connected", () => {
  logger.info("The mongoose is successfully connected.");
  console.log("Success");
});

mongoose.connection.on("error", err => {
  logger.error("Mongoose connection has occured " + err + " error");
});

mongoose.connection.on("disconnected", () => {
  logger.info("Mongoose connection is disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});
