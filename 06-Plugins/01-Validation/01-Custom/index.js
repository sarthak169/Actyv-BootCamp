const Validator = require("validator");
const { emptyConstraints } = require("./is-empty");
const { logger } = require("../../03-ExceptionHandling/01-Logger/index");

let isEmpty = { emptyConstraints };

function validateUserInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name is required";
    logger.error("The firstname is not valid" + errors.firstname + "error");
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name is required";
    logger.error("The lastname is not valid" + errors.lastname + "error");
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Last name is required";
    logger.error("The username is not valid" + errors.username + "error");
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = { validateUserInput };
