const User = require("../../01-Database/03-Model/index");

getVirtualUser = (err, res) => {
  const usr = new User({
    firstname: "Steve",
    lastname: "Jobs"
  });
  if (err) {
    res.status(400).json({ message: "Internal Error" });
  }
  res.status(200).json(usr.fullName);
};

module.exports = { getVirtualUser };
