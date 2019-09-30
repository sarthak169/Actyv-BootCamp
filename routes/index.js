const userController = require("../controller/index");

/**
 *Initializing the express router
 */
const express = require("express");
const router = express.Router();

/**
 * POST request to create a new user
 */
router.post("/create", userController.createUser);

/**
 * GET requests read a user by it's id
 */
router.get("/read/:id", userController.readUser);

/**
 * GET requests read a last name of the user
 */
router.get("/lastname", userController.getByLastName);

/**
 * GET requests read a name of the user
 */
router.get("/adult", userController.getName);

/**
 * GET requests to get all users of age 20
 */
router.get("/age", userController.getByAge);

/**
 * GET requests to full name of the user
 */
router.get("/full-name", userController.getFullname);

/**
 * POST requests to update the user
 */
router.put("/update/:id", userController.updateUser);

/**
 * DELETE request to delete the user
 */
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
