const User = require("../../01-Database/03-Model/index");
const bcrypt = require("bcryptjs");

loginUser = (req, res) => {
  //Have to complete //////////////

  bcrypt.hash(login.password, process.env.SALT, (err, hash) => {
    if (err) return next(err);
    login.password = hash;
    next();
  });
};
