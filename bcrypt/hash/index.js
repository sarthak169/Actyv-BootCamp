/**
 * Requiring the env file.
 */
require("dotenv").config();
const jwt = require("jsonwebtoken");
/**
 * Importing the http-status codes
 */
const HttpStatus = require("http-status-codes");

module.exports.loginUser = (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: req.user.id }, process.env.LOCAL_SECRET);
  res.status(HttpStatus.OK).json({ token });
};
