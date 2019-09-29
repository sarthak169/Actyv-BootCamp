const {
  testRoute,
  createUser,
  updataeUser,
  readUser,
  deleteUser
} = require("../01-Database/04-CRUD/index");

//instances
const {
  userFind,
  userSearch,
  getDegree
} = require("../02-Methods/01-Instance/index");

//statics
const {
  getSimilarAge,
  getSimilarLastName
} = require("../02-Methods/02-Static/index");

//virtual

const { getVirtualUser } = require("../02-Methods/03-Virtuals/index");

//discriminator
const {
  testRouter,
  createBaseUser,
  readBaseUser
} = require("../05-Discriminator/Base/controller");

const express = require("express");

const router = express.Router();

//CRUD Routes
router.get("/test", testRoute);
router.post("/create", createUser);
router.get("/read/:id", readUser);
router.put("/update/:id", updataeUser);
router.delete("/delete/:id", deleteUser);

//Instance Routes
router.get("/find", userFind);
router.get("/search", userSearch);
router.get("/degree", getDegree);

//Static ROutes
router.get("/age", getSimilarAge);
router.get("/names", getSimilarLastName);

//virtual
router.get("/virtual", getVirtualUser);

//discriminator
router.get("/testbase", testRouter);
router.post("/createbase", createBaseUser);
router.get("/readbase", readBaseUser);

module.exports = router;
