/** User Model
 * @module user/Model
 */

/**
 * @namespace userModel
 */

/**
 * Mongoose Model for User.
 * @const
 */

const User = require("../02-Schema/index");

/**
 * Model to create the fullName
 * @name fullName
 * @function
 * @memberof module:user/model~userModel
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.fullname = () => {
  User.methods.getFullName = function() {
    return this.firstname + " " + this.lastname;
  };
};

/**
 * Model to find the age.
 * @name findByAge
 * @function
 * @memberof module:user/model~userModel
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.findByAge = () => {
  User.statics.findByAge = function(age, callback) {
    this.find({ age: age }, callback);
  };
};

/**
 * Model to find the lastname.
 * @name lastname
 * @function
 * @memberof module:user/model~userModel
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.lastname = () => {
  User.static("findByLastName", function(lastname, callback) {
    this.find({ lastname: lastname }, callback);
  });
};

/**
 * Model to create the virtual fullname
 * @name virtualFullName
 * @function
 * @memberof module:user/model~userModel
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.virtualFullname = () => {
  User.virtual("fullName").get(function() {
    return this.firstname + " " + this.lastname;
  });
};

/**
 * Find and Return a user by his email
 * @name findUserByEmail
 * @function
 * @memberof module:user/factory~userFactory
 * @inner
 * @param {object} id - User's email
 */

module.exports.findUserByEmail = async email => {
  return await User.findOne({ email }).exec();
};

/**
 * Model to create the userPlugin
 * @name userPlugin
 * @function
 * @memberof module:user/model~userModel
 * @inner
 * @param {Object} request - NULL
 * @param {Object} response - Response Object
 */

module.exports.userPlugin = () => {
  User.plugin(require("mongoose-autopopulate"));
};
