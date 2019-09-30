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

const User = require("../02-Schema/index");

/**
 * Validating the entered information.
 * @const
 */

const validateUserInput = require("../../06-Plugins/01-Validation/01-Custom/index");

/**
 * Controller to check the fucntioning of route
 * @name testRoute
 * @function ArrowFunctions
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

testRoute = (req, res) => {
  res.status(200).json({ message: "User works" });
};

/**
 * Controller to handle the new user
 * @name createUser
 * @function GenericFunctions
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */

createUser = (req, res) => {
  /**
   * Checking the validations
   * @const
   * @param {errors} - Errors.
   * @param {isValid} - Validating
   */

  const { errors, isValid } = validateUserInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  /**
   * Creating the new User from the model
   * @const
   */

  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  });

  /**
   * Initializing the document Middleware -Saving to collections.
   */

  newUser.save(function(err, user) {
    if (err) {
      res.status(404).json({ message: "Missing constraints" });
    }
    res.status(200).json(user);
  });
};

/**
 * Controller to read the user documents based on id
 * @name readUser
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */

readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json({ message: "Error fetching" });
    }
    res.status(200).json(user);
  });
};

/**
 * Controller to update the user details
 * @name updateUser
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */

updataeUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) {
      res.status(400).json({ message: "Update failed" });
    }
    res.status(200).json(user);
  });
};

/**
 * Controller to delete the user using id
 * @name deleteUser
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - Request Object
 * @param {Object} response - Response Object
 */

deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err)
      return res.status(400).json({ message: "Request cannot be processed" });

    res.status(200).json({ message: "User Removed" });
  });
};

module.exports = {
  testRoute,
  createUser,
  updataeUser,
  readUser,
  deleteUser
};
