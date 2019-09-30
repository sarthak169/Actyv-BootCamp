/**
 * Module containing middlewares and routes
 */

const app = require("../index");

/**
 * Loading environment variables
 */

require("dotenv").config();

/**
 * Setting the port to application
 */
app.set("port", process.env.PORT || 3000);

/**
 * Creating HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port.
 */
server.listen(port);
