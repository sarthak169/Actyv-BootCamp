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

const { User } = require("../../01-Database/02-Schema/index");

/**
 * Controller to create Instance method
 * @name userSearch
 * @function find
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.userSearch = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).json({ message: "Document Error" });
    }
    res.status(200).json(docs);
  }).sort({ lastname: "asc" });
};

/**
 * Controller to create the Instance Method
 * @name userFind
 * @function findOne
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.userFind = (req, res) => {
  User.findOne({ firstname: "raju" }).exec((err, docs) => {
    if (err) {
      res.status(400).json({ message: "No records found" });
    }
    res.status(200).json(docs);
  });
};

const Degree = new User({ type: "cse" });

/**
 * Controller to create the Instance Method
 * @name getDegree
 * @function findSimilarTypes
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.getDegree = function(req, res) {
  Degree.findSimilarTypes((err, user) => {
    if (err) {
      res.status(400).json({ message: "Data Mismatch" });
    }
    res.status(200).json(user);
  });
};
