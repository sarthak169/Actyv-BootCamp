/** Express Server
 * @module server/app
 */

/**
 * @namespace appServer
 */

/**
 * Express is a Node.js web application framework
 * @const
 */
const express = require("express");

/**
 * Passport.js as an authentication middleware.
 * @const
 */

const bodyParser = require("body-parser");

const app = express();
const users = require("./Routes/index");
/**
 * Importing mongoose connection
 */

require("./01-Database/01-Connection/index");

//Body  Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Serving Routes
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {string} root - Root Route
 * @param {object} router - Express Router
 */
app.use("/users", users);

module.exports = app;
