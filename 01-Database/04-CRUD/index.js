//schema model
const mongoose = require("mongoose");
const User = require("../02-Schema/index");

const validateUserInput = require("../../06-Plugins/01-Validation/01-Custom/index");
//arrow function example
testRoute = (req, res) => {
  res.status(200).json({ message: "User works" });
};

//generic function example
createUser = (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  // Check Validation
  if (!isValid) {
    res.status(400).json(errors);
  }
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  });

  //document Middleware
  newUser.save(function(err, user) {
    if (err) {
      res.status(404).json({ message: "Missing constraints" });
    }
    res.status(200).json(user);
  });
};

//read
readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json({ message: "Error fetching" });
    }
    res.status(200).json(user);
  });
};

//update

updataeUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) {
      res.status(400).json({ message: "Update failed" });
    }
    res.status(200).json(user);
  });
};

//delete

deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err)
      return res.status(400).json({ message: "Request cannot be processed" });

    res.status(200).json({ message: "User Removed" });
  });
};

module.exports = {
  testRoute,
  createUser,
  updataeUser,
  readUser,
  deleteUser
};
