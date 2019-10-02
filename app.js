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

/**
 * Importing mongoose connection
 */

require("./01-Database/01-Connection/index");

/**
 * Node.JS path module
 * @const
 */

const path = require("path");

/**
 * Recognize the incoming Request Object as a JSON Object.
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} json - Middleware
 */

app.use(express.json());

/**
 * Recognize the incoming Request Object as strings or arrays.
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} urlencoded - Middleware
 */
app.use(express.urlencoded({ extended: false }));

//Body  Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Initializing Passport
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} initialize - Midddleware
 */
const passport = require("passport");
app.use(passport.initialize());

/**
 * Importing Passport Strategies
 */

require("./04-Middleware/02-Passport/jwt");
require("./04-Middleware/02-Passport/local");

/**
 * Serving public as a static folder.
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} static - Midddleware
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Serving Routes
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {string} root - Root Route
 * @param {object} router - Express Router
 */
app.use("/users", require("./Routes"));

module.exports = app;
