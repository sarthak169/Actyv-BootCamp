const User = require("../../01-Database/03-Model/index");

const Degree = new User({ type: "cse" });

userSearch = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).json({ message: "Document Error" });
      logger.error("Error while searching for docs " + err + " error");
    }
    res.status(200).json(docs);
  }).sort({ lastname: "asc" });
  logger.info("Documents fetched from collections");
};

userFind = (req, res) => {
  User.findOne({ firstname: "Spring" }).exec((err, user) => {
    if (err) {
      res.status(400).json({ message: "No records found" });
      logger.error("Error while finding user by firstname " + err + " error");
    }
    res.status(200).json(User.getFUllName());
    logger.info("full name fetched using the firstname");
  });
};

//find similar types

getDegree = function(req, res) {
  Degree.findSimilarTypes((err, degree) => {
    if (err) {
      res.status(400).json({ message: "Data Mismatch" });
      logger.err("Error while findiing cse similar data" + err + "error");
    }
    res.status(200).json(degree);
    logger.info("The cse - similar degree fetched");
  });
};

module.exports = {
  userFind,
  userSearch,
  getDegree
};
