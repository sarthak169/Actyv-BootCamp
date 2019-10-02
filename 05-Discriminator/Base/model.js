const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Base = require("./index");

const bookSchema = Base.discriminator(
  "Book",
  new Schema({
    name: String,
    isbn: Number,
    author: String
  })
);

module.exports = Story = mongoose.model("Book");
