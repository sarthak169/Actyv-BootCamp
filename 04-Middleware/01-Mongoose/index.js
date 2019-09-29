const User = require("../../../01-Database/03-Model/index");
const { logger } = require("../../03-ExceptionHandling/01-Logger/index");

newMiddleware = () => {
  const newUser = new User({
    firstname: "jacob",
    lastname: "sam"
  });
  newUser.pre("save", function(err, res, next) {
    if (err) {
      res.status(400).json({ message: "Invalid request" });
      logger.error(
        "Error while creating the middleware user " + err + " error"
      );
    }
    res.status(200).json({ message: "User created successfully!" });
    logger.info("Middleware User created and added to database");
    next();
  });
};

deleteOneMiddleware = () => {
  User.deleteOne(
    {
      firstname: "Eddard",
      lastname: "Stark"
    },
    (err, res) => {
      if (err) {
        res.status(400).json({ message: "No user found" });
        logger.error("No such user found in database" + err + "error");
      }
      res.status(200).json({ message: "Request Processed" });
      logger.info("The user with firstname Eddard deleted from database");
    }
  );
};

findMiddleware = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).json({ message: "Documenting Error" });
      logger.error("Error while searching for docs " + err + " error");
    }
    res.status(200).json(docs);
  }).sort({ lastname: "asc" });
  logger.info("Documents fetched from collections");
};

findOneMiddleware = (req, res) => {
  User.findOne({ firstname: "Jacob" }).exec((err, user) => {
    if (err) {
      res.status(400).json({ message: "No records found" });
      logger.error("Error while finding user by firstname " + err + " error");
    }
    res.status(200).json(User.getFUllName());
    logger.info("full name fetched using the firstname");
  });
};

userDelete = (req, res) => {
  User.findOneAndRemove({ _id: req.user.id }).then(() =>
    res.status(200).json({ success: true })
  );
};

module.exports = {
  findOneMiddleware,
  findMiddleware,
  deleteOneMiddleware,
  newMiddleware,
  userDelete
};

//document middleware, model middleware, aggregate middleware, and query middleware
