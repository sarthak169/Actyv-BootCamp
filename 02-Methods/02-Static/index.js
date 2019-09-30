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

const User = require("../../01-Database/02-Schema/index");

const {
  findByAge,
  findByLastName
} = require("../../01-Database/03-Model/index");

/**
 * Controller to create static method
 * @name getSimilarAge
 * @function findByAge
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

getSimilarAge = (req, res) => {
  User.findByAge(20, function(err, data) {
    if (err) {
      res.status(400).json({ message: "Age Mismatch" });
      logger.error(
        "Error while fetching the similar age records" + err + "error"
      );
    }
    res.status(200).json(data);
    logger.info("Age similar data fetched.");
  });
};

/**
 * Controller to create static method
 * @name getSimilarLastName
 * @function findByLastName
 * @memberof module:user/controller~userController
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

getSimilarLastName = (req, res) => {
  User.findByLastName("Langer", function(err, data) {
    if (err) {
      res.status(400).json({ message: "Lastname Mismatch" });
      logger.error(
        "Error while fetching the record on lastname" + err + "error"
      );
    }
    res.status(200).json(data);
    logger.info("Similar record fetched using lastname");
  });
};

module.exports = {
  getSimilarAge,
  getSimilarLastName
};
