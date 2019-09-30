/**
 * Express is a Node.js web application framework
 */
const express = require("express");
const bodyParser = require("body-parser");

/**
 * Initializing the express routers.
 */
const app = express();

const users = require("./routes/index");
/**
 * Initializing the mongoose connection.
 */

require("./connection/mongoose");

/**
 * Body Parser: The body-parser is used to extracts the entire body portion of an incoming request stream and exposes it on req.body.
 * The body parser is used to handle the data easily.It will parse the text as JSON body.
 */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);

module.exports = app;
