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

const User = require("../../../01-Database/02-Schema/index");
const { consoleLogger } = require("../../03-ExceptionHandling/01-Logger/index");


/**
 * Controller to use the pre method
 * @name newMiddleware
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

newMiddleware = () => {
  const newUser = new User({
    firstname: "jacob",
    lastname: "sam"
  });
  newUser.pre("save", function(err, res, next) {
    if (err) {
      res.status(400).json({ message: "Invalid request" });
    consoleLogger.error("Error Occured")

    }
    res.status(200).json({ message: "User created successfully!" });
    next();
  });
};

/**
 * Controller to delete te user
 * @name deleteOneMiddleware
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

deleteOneMiddleware = () => {
  User.deleteOne(
    {
      firstname: "Eddard",
      lastname: "Stark"
    },
    (err, res) => {
      if (err) {
        res.status(400).json({ message: "No user found" });
      }
      res.status(200).json({ message: "Request Processed" });
    }
  );
};

/**
 * Controller to find the document
 * @name findMiddleware
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

findMiddleware = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).json({ message: "Documenting Error" });
    }
    res.status(200).json(docs);
  }).sort({ lastname: "asc" });
};

/**
 * Controller to find a particular document
 * @name findOneMiddleware
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */


findOneMiddleware = (req, res) => {
  User.findOne({ firstname: "Jacob" }).exec((err, user) => {
    if (err) {
      res.status(400).json({ message: "No records found" });
    }
    res.status(200).json(User.getFUllName());
  });
};

/**
 * Controller to delete the document
 * @name userDelete
 * @function
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

userDelete = (req, res) => {
  User.findOneAndRemove({ _id: req.user.id }).then(() =>
    res.status(200).json({ success: true })
  );
};

module.exports = {
  findOneMiddleware,
  findMiddleware,
  deleteOneMiddleware,
  newMiddleware,
  userDelete
};

//document middleware, model middleware, aggregate middleware, and query middleware
