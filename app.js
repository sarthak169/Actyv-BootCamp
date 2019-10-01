/**
 * Express is a Node.js web application framework
 */
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

/**
 * Initializing the express routers.
 */
const app = express();

/**
 * Initializing the mongoose connection.
 */
require("./connection/mongoose");

/**
 * Initializing the passport
 */
app.use(passport.initialize());
app.use(passport.session());

require("./passport/strategy/jwt/index");
require("./passport/strategy/local/index");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
/**
 * Body Parser: The body-parser is used to extracts the entire body portion of an incoming request stream and exposes it on req.body.
 * The body parser is used to handle the data easily.It will parse the text as JSON body.
 */
app.use(bodyParser.json());

/**
 * Recognize the incoming Request Object as strings or arrays.
 */
app.use(bodyParser.urlencoded({ extended: false }));

const users = require("./routes/index");

app.use("/users", users);

module.exports = app;
