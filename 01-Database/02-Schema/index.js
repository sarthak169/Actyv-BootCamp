/**
 * Mongoose driver for MongoDb
 * @const
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Importing the Base schema model
 * @const
 */

const Base = require("../../05-Discriminator/Base/index");

/**
 * Mongoose Schema using the base discriminator
 * @const
 */

const userSchema = Base.discriminator(
  "User",
  new Schema({
    /**
     * @SchemaType - String
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
     * @SchemaType - Number
     * Built-in Validators : min,max
     */
    age: {
      type: Number,
      min: 18,
      max: 60
    },
    /**
     * @SchemaType - String
     * Built-in Validators : minlength, maxlength, lowercase
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
     * @SchemaType - Date
     */
    dob: {
      type: Date,
      default: Date.now
    },
    /**
     * @SchemaType - Boolean
     */
    working: {
      type: Boolean
    },
    /**
     * @SchemaType - Array
     */
    skills: {
      type: [String]
    },
    /**
     * @SchemaType - Nested
     */
    education: [
      {
        school: {
          type: String
        },
        degree: {
          type: String
        }
      }
    ],

    _id: {
      type: Schema.Types.ObjectId,
      autopopulate: true
    }
  })
);

module.exports = User = mongoose.model("User");

/**
 * @typedef {Object} SchemaTypes
 * @property {String} firstName - First Name of the User
 * @property {String} lastname - Last Name of the User
 * @property {Number} age - Age of the User
 * @property {String} username -Username of the User
 * @property {Number} phone - Phone number of the user
 * @property {String} email - Email Address of the use
 * @property {String} password - Password of the User
 * @property {Date} dob - Date of Birth of the User
 * @property {Boolean} working - Working status of User
 * @property {Array} skills - skills of the User
 * @property {Nested} education - education of the User
 * @property {String} _id - Id of the User
 */
