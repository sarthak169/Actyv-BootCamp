const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Base = require("../../05-Discriminator/Base/index");

const userSchema = Base.discriminator(
  "User",
  new Schema({
    //string
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    //number
    age: {
      type: Number,
      min: 18, //built- in validators
      max: 60
    },
    //min and max checking
    username: {
      type: String,
      minlength: 6, //built -in validators
      maxlength: 30,
      lowercase: true
    },
    phone: {
      type: Number
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    //date
    dob: {
      type: Date,
      default: Date.now
    },
    //boolean
    working: {
      type: Boolean
    },
    //array
    skills: {
      type: [String]
    },

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
