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
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

/**
 * CORS is a Node.JS package for providing a Connect/Express middleware that can be used to enable CORS
 * @const
 */
const cors = require("cors");

/**
 * Importing mongoose connection
 */
require("./01-Database/01-Connection/index");

/**
 * Importing Passport Strategies
 */
require("./04-Middleware/02-Passport");

/**
 * Node.JS path module
 * @const
 */
const path = require("path");

/**
 * Cross Origin Resource Sharing (CORS) allows us to use Web applications within browsers when domains aren't the same
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} cors - Enable cors in our application
 */
app.use(cors());

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

// /**
//  * Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
//  * @function
//  * @name use
//  * @memberof module:server/app~appServer
//  * @inner
//  * @param {method} cookieParser - Midddleware
//  */
// // app.use(cookieParser());

/**
 * Initializing Passport
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} initialize - Midddleware
 */
app.use(passport.initialize());

/**
 * Serving public as a static folder.
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} static - Midddleware
 */
app.use(express.static(path.join(__dirname, "public")));

// /**
//  * Setting View Engine
//  * @function
//  * @name use
//  * @memberof module:server/app~appServer
//  * @inner
//  * @param {string} type - View Engine
//  * @param {string} pug - Template Name
//  */
// app.set("view engine", "pug");

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
