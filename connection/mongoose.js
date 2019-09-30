const mongoose = require("mongoose");

/**
 * Opening Mongoose Connection
 */
mongoose.connect(process.env.mongoURI, options);

/**
 * Connected Handler
 */
mongoose.connection.on("connected", () => {
  console.info("MongoDB connected Successfully!!");
});

/**
 * Mongoose Error Handler
 */

mongoose.connection.on("error", err => {
  console.error("Mongoose connection has occured " + err + " error");
});

/**
 * Mongoose Disconnected Handler
 */

mongoose.connection.on("disconnected", () => {
  console.info("Mongoose connection is disconnected");
});

/**
 * Unexpected Shutdown Handler
 */
process.on("SIGINT", function() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});
