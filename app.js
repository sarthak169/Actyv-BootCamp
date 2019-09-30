/**
 * Express is a Node.js web application framework
 */
const express = require("express");

/**
 * Initializing the express routers.
 */
const app = express();

/**
 * Initializing the mongoose connection.
 */

require("./connection/mongoose");

module.exports = app;
