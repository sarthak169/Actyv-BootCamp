/**
 * Mongoose Schema Methods for User model.
 */

const User = require("../schema/index");

/**
 * Instance methods: These are the methods which are used to manipulate the individual document.
 */
User.methods.getFullName = function() {
  return this.firstname + " " + this.lastname;
};

/**
 * Static methods: These are the methods which are used to query the whole collection.
 * - Add a function property to schema.statics
 */
User.statics.findByAge = function(age, callback) {
  this.find({ age: age }, callback);
};

/**
 * Static methods
 * - Call the Schema#static() function
 */

User.static("findByLastName", function(lastname, callback) {
  this.find({ lastname: lastname }, callback);
});

/**
 * Virtual Methods:The virtual methods are not persisted to MongoDB.
 *  The method contains getters and setters which are used to combine the mongoose fields.
 */

User.virtual("fullName").get(function() {
  return this.firstname + " " + this.lastname;
});
