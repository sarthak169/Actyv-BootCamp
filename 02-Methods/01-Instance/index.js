const User = require("../../01-Database/03-Model/index");

const Degree = new User({ type: "cse" });

userSearch = (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).json({ message: "Document Error" });
    }
    res.status(200).json(docs);
  }).sort({ lastname: "asc" });
};

userFind = (req, res) => {
  User.findOne({ firstname: "raju" }).exec((err, docs) => {
    if (err) {
      res.status(400).json({ message: "No records found" });
    }
    res.status(200).json(docs);
  });
};

//find similar types

getDegree = function(req, res) {
  Degree.findSimilarTypes((err, degree) => {
    if (err) {
      res.status(400).json({ message: "Data Mismatch" });
    }
    res.status(200).json(degree);
  });
};

module.exports = {
  userFind,
  userSearch,
  getDegree
};
