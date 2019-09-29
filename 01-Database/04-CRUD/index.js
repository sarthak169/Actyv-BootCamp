//schema model
const mongoose = require("mongoose");
const userSchema = require("../02-Schema/index");

const User = mongoose.model("User", userSchema);
const {
  logger
} = require("../../BootCamp/03-ExceptionHandling/01-Logger/index");

const validateUserInput = require("../../06-Validation/01-Custom/index");
//arrow function example
testRoute = (req, res) => {
  res.status(200).json({ message: "User works" });
};

//generic function example
createUser = function() {
  const { errors, isValid } = validateUserInput(req.body);

  // Check Validation
  if (!isValid) {
    res.status(400).json(errors);
    logger.error("Validation error occured" + err + "error");
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
  newUser.save(function(err, res) {
    if (err) {
      res.status(400).json({ message: "Invalid data" });
      logger.error("Error while creating the user " + err + " error");
    }
    res.status(200).json({ message: "User created successfully!" });
    logger.info("User created and added to database");
  });
};

//read
readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json({ message: "Error fetching" });
      logger.error("Error while reading the user details " + err + " error");
    }
    res.status(200).json(user);
    logger.info("User data received from database");
  });
};

//update

updataeUser = (req, res) => {
  const userFields = {};
  userFields.dob = req.body.dob;
  userFields.working = req.body.working;
  if (typeof req.body.skills !== "undefined") {
    userFields.skills = req.body.skills.split(",");
  }
  userFields.school = req.body.school;
  userFields.degree = req.body.degree;

  User.findByIdAndUpdate(
    req.params.id,
    /**
     * $set plugin for the
     */
    { $set: userFields },
    (err, user) => {
      if (err) {
        res.status(400).json({ message: "Invalid request!" });
        logger.error("Error while updating the user " + err + " error");
      }
      res.status(200).json({ message: "User updated" });
      logger.info("User data updated successfully");
    }
  );
};

//delete

deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err) {
      res.status(400).json({ message: "Request cannot be processed" });
      logger.error("Error while deleting the user details " + err + " error");
    }
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
