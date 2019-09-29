/** Express router providing user related routes
 * @module user/tests
 */

const mongoose = require("mongoose");
const User = require("../01-Database/03-Model/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

const dummyUser = {
  firstname: "danerys",
  lastname: "targareyan",
  age: 40,
  username: "khaleesi",
  phone: "1234567899",
  dob: 23 - 04 - 1999,
  working: true
};

const testUser = {
  firstname: "aarya",
  lastname: "stark",
  age: 18,
  username: "faceless",
  phone: "998836672",
  dob: 17 - 03 - 2018,
  working: true
};
let mongoUser;
let mongotrainer;
chai.use(chaiHttp);

/**
 * Runs before all the tests
 * @name before
 * @function
 * @inner
 * @param {callback} middleware - function with done as a param
 */

before(done => {
  User.create([dummyUser, testUser], (err, users) => {
    mongoUser = users[0];
    mongotrainer = users[1];
    done();
  });
});

/**
 * Test  to  implement mongoose methods
 * @name InstanceMethods
 * @function
 * @inner
 * @param {string} InstanceMethods - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("testing the route", () => {
  it("it should test the connection", done => {
    chai
      .request(server)
      .get("/users/test")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
      });
    done();
  });
});
// describe("Instance Methods", () => {
//   /**
//    * It should fetch the documents from the database
//    * @function
//    * @inner
//    * @param {string} description - string explaining what test should do
//    * @param {callback} middleware - function with done as a param
//    */

//   it("it should fetch items similar to docs", done => {
//     chai
//       .request(server)
//       .get("/users/search")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//       });
//     done();
//   });

//   /**
//    * It should return the document based on firstname
//    * @function
//    * @inner
//    * @param {string} description - string explaining what test should do
//    * @param {callback} middleware - function with done as a param
//    */

//   it("it should fetch document based on firstname", done => {
//     chai
//       .request(server)
//       .get("/users/find/one")
//       .send(mongoUser1)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");
//         res.body.should.have.property("firstname").eql("oscar");
//       });
//     done();
//   });
// });

// /**
//  * Test  to  implement mongoose static methods
//  * @name StaticMethods
//  * @function
//  * @inner
//  * @param {string} StaticMethods - Name of test group
//  * @param {callback} middleware - function with done as a param
//  */

// describe("Static Methods", () => {
//   /**
//    * It will return the document based on the similar type
//    * @function
//    * @inner
//    * @param {string} description - string explaining what test should do
//    * @param {callback} middleware - function with done as a param
//    */

//   it("it should get documents based on the type", done => {
//     var user = new User({
//       firstname: "james",
//       lastname: "foster",
//       phone: "9876543667"
//     });
//     chai
//       .request(server)
//       .get("/users/static")
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//       });
//     done();
//   });
// });

// /**
//  * Runs after all the tests
//  * @name after
//  * @function
//  * @inner
//  * @param {callback} middleware - function with done as a param
//  */

after(done => {
  User.deleteOne(mongoUser1);
  User.deleteOne(mongoUser2);
  done();
});
