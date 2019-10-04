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
  logger.debug("The mongoURI is placed in env");
  logger.info("The mongoose is successfully connected.");
  logger.warn("The mongo  URI is not in the vault (vulnerable)");
  /**
   * NOTE: the console logger is not a good practice.
   */
  console.info("The mongoose database connected successfully");
});

mongoose.connection.on("error", err => {
  logger.error("Mongoose connection has occured " + err + " error");
  /**
   * NOTE: the console logger is not a good practice.
   */
  console.error("The mongoose connection terminated with error");
});

mongoose.connection.on("disconnected", () => {
  logger.info("Mongoose connection is disconnected");
  console.log("The mongoose database disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});
