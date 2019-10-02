/** User Controller
 * @module User/controller
 */

/**
 * @namespace userController
 */

const { Book } = require("./index");

module.exports.createBook = (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    isbn: req.body.isbn,
    place: req.body.place,
    color: req.body.color
  });
  newBook.save(function(err, book) {
    if (err)
      return res.status(400).json({ message: "Base discriminator error" });

    res.status(200).json({ message: "Base Discriminator user created" });
  });
};

module.exports.readBook = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      res.status(404).json({ message: "Invalid Request" });
    }
    res.status(200).json({ book });
  });
};
