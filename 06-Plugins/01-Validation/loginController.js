const validateLoginInput = require("./02-Login/index");
const User = require("../01-Database/03-Model/index");
const bcrypt = require("bcryptjs");

const { logger } = require("../03-ExceptionHandling/01-Logger");

loginUser = (req, res) => {
  const { err, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    res.status(400).json({ message: "Unable to login" });
    logger.error("Unable to login the user" + err + "error");
  }
  const email = req.body.email;
  const password = req.body.password;
  let payload = { email, password };
  res.status(200).json(payload);
  logger.info("User successfully logged in");

  User.findOne({ email }).then(user => {
    if (!user) {
      err.email = "Bad Request";
      res.status(404).json(err);
      logger.error("Unable to login" + err + "error");
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, username: user.username }; // Create JWT Payload
        // Sign Token
        jwt.sign(
          payload,
          process.env.JWT_SECRETy,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
            logger.info("User session initiated");
          }
        );
      } else {
        err.password = "Password incorrect";
        res.status(400).json(err);
        logger.error("User session cannot be started" + err + " error.");
      }
    });
  });
};
