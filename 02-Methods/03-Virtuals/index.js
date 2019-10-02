/** User Controller
 * @module user/controller
 */

/**
 * @namespace userController
 */

/**
 * Mongoose Model for User.
 * @const
 */

const { User } = require("../../01-Database/03-Methods/index");

/**
 * Controller to create the virtual method
 * @name getVirtualUser
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.getVirtualUser = (err, res) => {
  const usr = new User({
    firstname: "Steve",
    lastname: "Jobs"
  });
  if (err) {
    res.status(400).json({ message: "Internal Error" });
  }
  res.status(200).json(usr.fullName);
};
