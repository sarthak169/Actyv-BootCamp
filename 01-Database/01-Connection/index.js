/** Mongoose Configuration
 * @module connection/mongoose
 */

/**
 * @namespace mongooseConfiguration
 */

/**
 * Requiring Mongoose
 * @const
 */
const mongoose = require("mongoose");

/**
 * Requiring Logger
 * @const
 */
const { logger } = require("../../03-ExceptionHandling/01-Logger/index");

require("dotenv").config();

/**
 * @typedef {Object} options
 * @property {Boolean} useNewUrlParser To parser MongoDB connection strings
 * @property {Boolean} useCreateIndex Ask MongoDB to be able to identify unique fields
 * @property {Boolean} useFindAndModify New Mongoose option to be able to use findById() etc.
 * @property {Boolean} autoIndex Disbale as index creation can cause a significant performance impact
 * @property {Number} reconnectTries Defines number of tries to try reconnecting to MongoDB
 * @property {Number} reconnectInterval MongoDB driver will try to reconnect every reconnectInterval milliseconds for reconnectTries
 * @property {Number} poolSize The maximum number of sockets the MongoDB driver will keep open for this connection
 */

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
 * Opening Mongoose Connection
 * @name connect
 * @function
 * @memberof module:connection/mongoose~mongooseConfiguration
 * @inner
 * @param {string} mongoURI - MongoDB Connection URL
 * @param {object} connectionOptions - MongoDB Connection Options
 */
mongoose.connect(process.env.mongoURI, options);

/**
 * Connected Handler
 * @name connected
 * @function
 * @memberof module:connection/mongoose~mongooseConfiguration
 * @inner
 * @param {string} connected - Connection Event
 * @param {cakkback} middleware - Middleware
 */
mongoose.connection.on("connected", () => {});

/**
 * Error Handler
 * @name error
 * @function
 * @memberof module:connection/mongoose~mongooseConfiguration
 * @inner
 * @param {string} error - Connection Event
 * @param {cakkback} middleware - Middleware
 */
mongoose.connection.on("error", err => {
  logger.error("Mongoose connection has occured " + err + " error");
});

/**
 * Disconnected Handler
 * @name disconnected
 * @function
 * @memberof module:connection/mongoose~mongooseConfiguration
 * @inner
 * @param {string} disconnected - Connection Event
 * @param {cakkback} middleware - Middleware
 */
mongoose.connection.on("disconnected", () => {
  logger.info("Mongoose connection is disconnected");
});

/**
 * Unexpected Shutdown Handler
 * @name SIGINT
 * @function
 * @memberof module:connection/mongoose~mongooseConfiguration
 * @inner
 * @param {string} SIGINT - Connection Event
 * @param {cakkback} middleware - Middleware
 */
process.on("SIGINT", function() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});
