const User = require("../../01-Database/03-Model/index");

const {
  findByAge,
  findByLastName
} = require("../../01-Database/03-Model/index");
getSimilarAge = (req, res) => {
  User.findByAge(20, function(err, data) {
    if (err) {
      res.status(400).json({ message: "Age Mismatch" });
      logger.error(
        "Error while fetching the similar age records" + err + "error"
      );
    }
    res.status(200).json(data);
    logger.info("Age similar data fetched.");
  });
};

getSimilarLastName = (req, res) => {
  User.findByLastName("Langer", function(err, data) {
    if (err) {
      res.status(400).json({ message: "Lastname Mismatch" });
      logger.error(
        "Error while fetching the record on lastname" + err + "error"
      );
    }
    res.status(200).json(data);
    logger.info("Similar record fetched using lastname");
  });
};

module.exports = {
  getSimilarAge,
  getSimilarLastName
};
