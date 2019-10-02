const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  /**
   * To declare a path as a string you may use either the String global constructor or the string 'String'.
   * @SchemaType - String
   * The string Schema type will have the built -in validators as:
   * lowercase, uppercase, trim, match, enum, minlength, maxlength
   */

  firstname: {
    type: String,
    required: true
  },

  /**
   * @SchemaType - String
   */

  lastname: {
    type: String,
    required: true
  },

  /**
   * To declare a path as a number, you may use either the Number global constructor or the string 'Number'.
   * @SchemaType - Number
   * The number schema type consists of the built-in validators as:
   * min, max
   */

  age: {
    type: Number,
    min: 5,
    max: 60
  },

  /**
   * @SchemaType - String
   */

  username: {
    type: String,
    minlength: 6,
    maxlength: 30,
    lowercase: true
  },

  /**
   * @SchemaType - Number
   */

  phone: {
    type: Number
  },

  /**
   * @SchemaType - String
   */

  email: {
    type: String,
    unique: true
  },

  /**
   * @SchemaType - String
   */

  password: {
    type: String
  },

  /**
   * Date is a built in type.
   * The default values can be given to the schema type as Date.now, Date.UTC
   * @SchemaType - Date
   */

  dob: {
    type: Date,
    default: Date.now
  },

  /**
   * Booleans in Mongoose are plain JavaScript booleans. By default, Mongoose casts the below values to true.
   * The boolean is a flag bit which either consists 0 or 1.
   * @SchemaType - Boolean
   */

  working: {
    type: Boolean
  },

  /**
   * Mongoose supports arrays of SchemaTypes and arrays of subdocuments.
   *  Arrays of SchemaTypes are also called primitive arrays, and arrays of subdocuments are also called document arrays.
   * @SchemaType - Array
   */

  skills: {
    type: [String]
  },

  /**
   * The nested Schema type consists of different other types as Stirng, Number etc.
   * @SchemaType - Nested
   */

  education: [
    {
      school: {
        type: String
      },
      percentage: {
        type: Number
      },
      degree: {
        type: String
      }
    }
  ]
});

module.exports.userSchema = userSchema;

require("../03-Methods/index");

const User = mongoose.model("User", userSchema);

module.exports.User = User;
