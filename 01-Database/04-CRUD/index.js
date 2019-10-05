/**
 * Requiring the user model.
 */
const { User } = require("../02-Schema/index");
const HttpStatus = require("http-status-codes");


/**
 * Check the user Route
 */
module.exports.testRoute =(req,res)=>{
  res.status(HttpStatus.OK).json({message: "User Router Works"});
};

/**
 * Creating the user and add the user to database
 */
//------------------Create----------------//
module.exports.createUser = (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  });

  /**
   * Initializing the document Middleware -Saving to collections.
   */

  newUser.save(function(err, user) {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Missing Constraints" });

    res.status(HttpStatus.OK).json({ message: "User created" });
  });
};

/**
 * Reading the user from the database
 */
//--------------------Read----------------//
module.exports.readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Error fetching" });

    res.status(HttpStatus.OK).json({ user });
  });
};
/**
 * Reading the Last Name user using request parameters.
 */
module.exports.getByLastName = (req, res) => {
  // It was earlier defined as a static method inside model/index.js
  User.findByLastName("Ch", function(err, data) {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Lastname Mismatch" });
    res.status(HttpStatus.OK).json({ data });
  });
};

/**
 * Fetching the user based on the age.
 */
module.exports.getByAge = (req, res) => {
  // It was earlier defined as a static method inside model/index.js
  User.findByAge(20, (err, data) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Age Mismatch" });
    res.status(HttpStatus.OK).json(data);
  });
};

/**
 * Reading the full name of the user based on the given object id
 */
module.exports.getFullname = (req, res) => {
  User.findById({ _id: "5d91d0cdc6044d08ec7e2581" }).exec((err, user) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Internal Error" });

    res.status(HttpStatus.OK).json(user.fullName);
  });
};

/*
 * Reading the user by it's id and checking if he is adult or not
 */
module.exports.getName = (req, res) => {
  User.findOne({ _id: "5d9448395abe8a9f4ae16a96" }).exec((err, user) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "User not defined" });

    // getIfAdult was defines as an instance method earlier in model/index.js
    res.status(HttpStatus.OK).json(user.getIfAdult());
  });
};

/**
 * Update the existiing user in collection
 */
//----------------------Update--------------------//
module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Update failed" });

    res.status(HttpStatus.OK).json(user);
  });
};

/**
 * Deletes the user from the database
 */
//-------------------Delete--------------//
module.exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Request cannot be processed" });

    res.status(HttpStatus.OK).json({ message: "User Removed" });
  });
};
