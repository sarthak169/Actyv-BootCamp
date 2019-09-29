const User = require("../../01-Database/03-Model/index");
const { logger } = require("../../03-Exception Handling/01-Logger/index");

getVirtualUser = (err, res) => {
  const usr = new User({
    firstname: "Steve",
    lastname: "Jobs"
  });
  if (err) {
    res.status(400).json({ message: "Internal Error" });
    logger.error("The virtual user cannot be created" + err + "error");
  }
  res.status(200).json(usr.fullName);
  logger.info("Vitual user successfully created");
};

module.exports = { getVirtualUser };
