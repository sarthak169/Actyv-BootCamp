/**
 * Mongoose driver for MongoDb
 * @const
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const baseOptions = {
  discriminatorKey: process.env.DIS_KEY
};

/**
 * Mongoose Schema
 * @const
 */

const baseSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now
    },
    place: {
      type: String
    },
    color: {
      type: String
    }
  },
  baseOptions
);

const Base = mongoose.model("Base", baseSchema);

module.exports = Base;

/**
 * @typedef {Object} movieSchema
 * @property {String} date   -  Date of entry of User
 * @property {String} place - Place of the User
 * @property {String} color - Color of the user
 */
