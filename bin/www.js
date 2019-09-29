/** Express Server
 * @module server/express
 */

/**
 * @namespace expressServer
 */

/**
 * Module containing middlewares and routes
 * @const
 */

const app = require("../index");

/**
 * Loading env variables to application
 */

require("dotenv").config();

/**
 * Setting the port to application
 */

app.set("port", process.env.PORT || 3000);

/**
 * Listening to the server
 * @const
 */

const server = app.listen(app.get("port"), () => {
  console.log("Application listening on port ", server.address().port);
});
