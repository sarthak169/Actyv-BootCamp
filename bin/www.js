/**
 * Module containing middlewares and routes
 */

const app = require("../app");

/**
 * Loading env variables to application
 */

require("dotenv").config();

/**
 * Importing the log4js library.
 */
const { logger } = require("../Logger/index");

/**
 * Setting the port to application
 */

app.set("port", process.env.PORT || 3000);

/**
 * Listening to the server
 */

const server = app.listen(app.get("port"), () => {
  /**
   * The logging the info in the console is the bad practise
   */
  console.log("Application listening on port ", server.address().port);
});
