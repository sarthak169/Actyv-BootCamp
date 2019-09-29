/** User Controller
 * @module User/controller
 */

/**
 * @namespace userController
 */

const Base = require("./index");
const User = require("../../01-Database/03-Model/index");

testRouter = (req, res) => {
  res
    .status(200)
    .json({ message: "User With Base discriminator works successfully" });
};

createBaseUser = (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    place: req.body.place,
    color: req.body.color
  });
  newUser.save(function(err, user) {
    if (err) {
      res.status(400).json({ message: "Base discriminator error!" });
    }
    res.status(200).json({ message: "Base Discriminator user created" });
  });
};

readBaseUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json({ message: "Invalid Request" });
    }
    res.status(200).json(user);
  });
};

module.exports = { testRouter, createBaseUser, readBaseUser };
