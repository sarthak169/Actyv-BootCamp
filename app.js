/**
 * Express is a Node.js web application framework
 */
const express = require("express");

/**
 * Passport.js as an authentication middleware.
 */

const bodyParser = require("body-parser");

const app = express();

/**
 * Importing mongoose connection
 */

require("./Connection/index");

/**
 * Node.JS path module
 */

const path = require("path");

/**
 * Express middleware
 */
app.use(express.json());

/**
 * Recognize the incoming Request Object as strings or arrays.
 */
app.use(express.urlencoded({ extended: false }));

/**
 * Body-parser middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
