const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateUserInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name is required";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Last name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
