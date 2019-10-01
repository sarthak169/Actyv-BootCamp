/**
 * Mongoose Schema Methods for User model.
 */
const bcrypt = require("bcryptjs");
const { userSchema } = require("../schema/index");

/**
 * Instance methods: These are the methods which are used to manipulate the individual document.
 */
userSchema.methods.getIfAdult = function() {
  return this.age > 18;
};

/**
 * Static methods: These are the methods which are used to query the whole collection.
 * - Add a function property to schema.statics
 */
userSchema.statics.findByAge = function(age, callback) {
  this.find({ age: age }, callback);
};

/**
 * Static methods
 * - Call the Schema#static() function
 */
userSchema.static("findByLastName", function(lastname, callback) {
  this.find({ lastname: lastname }, callback);
});

/**
 * Virtual Methods:The virtual methods are not persisted to MongoDB.
 *  The method contains getters and setters which are used to combine the mongoose fields.
 */
userSchema.virtual("fullName").get(function() {
  return this.firstname + " " + this.lastname;
});
