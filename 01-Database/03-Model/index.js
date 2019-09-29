const User = require("../02-Schema/index");

module.exports.fullname = () => {
  User.methods.getFullName = function() {
    return this.firstname + " " + this.lastname;
  };
};

//Static methods
//method 1
module.exports.findByAge = () => {
  User.statics.findByAge = function(age, callback) {
    this.find({ age: age }, callback);
  };
};

//method 2
//it work on our entire model
module.exports.lastname = () => {
  User.static("findByLastName", function(lastname, callback) {
    this.find({ lastname: lastname }, callback);
  });
};

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

module.exports.userPlugin = () => {
  User.plugin(require("mongoose-autopopulate"));
};

//Have to check the auto-populate

//creating a db table from the schema
// const User = mongoose.model("User", userSchema, "users");

module.exports = User;
