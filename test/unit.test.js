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
  working: false
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
 * Test to check the routes
 * @name TestRoutes
 * @function
 * @inner
 * @param {string} TestRoutes - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Testing the route", () => {
  /**
   * It should check wether the route is functional
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should test the connection", done => {
    chai
      .request(server)
      .get("/users/test")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("User works");
      });
    done();
  });
});

/**
 * Test to create the user
 * @name CreateUser
 * @function
 * @inner
 * @param {string} CreateUser - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Create User", () => {
  /**
   * It should create the user with credentials.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should create the user", done => {
    let man = {
      firstname: "john",
      lastname: "snow",
      age: 40,
      username: "kingInNorth",
      phone: "00999483221",
      dob: 28 - 04 - 1800,
      working: false
    };
    chai
      .request(server)
      .post("/users/create")
      .send(man)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("firstname").eql("john");
      });
    done();
  });

  /**
   * It should not create the user
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should not create the user", done => {
    chai
      .request(server)
      .get("/users/create")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        // res.body.should.have.property("message").eql("Missing constraints");
      });
    done();
  });

  /**
   * It should create base discriminator user.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should create the user discriminator", done => {
    let man = {
      firstname: "glenn",
      lastname: "mark",
      place: "Uk",
      color: "black"
    };
    chai
      .request(server)
      .post("/users/createbase")
      .send(man)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql("Base Discriminator user created");
      });
    done();
  });
});

/**
 * Test to read the user from the database
 * @name ReadUser
 * @function
 * @inner
 * @param {string} StaticMethods - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Reading User", () => {
  /**
   * It will return the status as success.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should read the user", done => {
    chai
      .request(server)
      .get(`/users/read/${mongoUser._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("lastname").eql("targareyan");
      });
    done();
  });

  /**
   * It will not read the user from database
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should not read the user", done => {
    let user = {
      firstname: "scott",
      lastname: "lang",
      phone: "098765432"
    };
    let id = user._id;
    chai
      .request(server)
      .get(`/users/read/${id}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Error fetching");
      });
    done();
  });

  /**
   * It will return the base user.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should read the base user", done => {
    chai
      .request(server)
      .get("/users/readbase")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
      });
    done();
  });
});

/**
 * Test to Update the existing user
 * @name UpdateUser
 * @function
 * @inner
 * @param {string} UpdateUser - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Update the user", () => {
  /**
   * It will return success on the update
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should update the current user", done => {
    chai
      .request(server)
      .put(`/users/update/${mongotrainer._id}`)
      .send({
        working: true
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("firstname").eql("aarya");
      });
    done();
  });

  /**
   * It will return the nessage as not updated
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should not update the current user", done => {
    let date = "24-09-1990";
    chai
      .request(server)
      .put(`/users/update/${mongoUser._id}`)
      .send(date)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Update failed");
      });
    done();
  });
});

/**
 * Test to delete the user document from the database
 * @name DeleteUser
 * @function
 * @inner
 * @param {string} DeleteUser - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Deleting User", () => {
  /**
   * It will return the success response
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should delete the user of id", done => {
    chai
      .request(server)
      .delete(`/users/delete/${mongoUser._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("User Removed");
      });
    done();
  });

  /**
   * It will return error while deleting the user
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should not delete the user", done => {
    let user = {
      firstname: "scott",
      lastname: "lang",
      phone: "098765432"
    };
    let id = user._id;
    chai
      .request(server)
      .delete(`/users/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql("Request cannot be processed");
      });
    done();
  });
});

/**
 * Test to implement the instance methods
 * @name InstanceMethods
 * @function
 * @inner
 * @param {string} InstanceMethods - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Instance Methods", () => {
  /**
   * It should fetch the documents from the database
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should fetch items similar to docs", done => {
    chai
      .request(server)
      .get("/users/search")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
      });
    done();
  });

  /**
   * It should return the document based on firstname
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should find the record based on firstname", done => {
    let firstname = "aarya";
    chai
      .request(server)
      .get("/users/find")
      .send(mongoUser.firstname)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("firstname").eql("danerys");
      });
    done();
  });

  /**
   * It should fetch the document with similar degree
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should find similar to degree", done => {
    chai
      .request(server)
      .get("/users/find")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
      });
    done();
  });
});

/**
 * Test  to  implement mongoose static methods
 * @name StaticMethods
 * @function
 * @inner
 * @param {string} StaticMethods - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Static Methods", () => {
  /**
   * It will return the document based on the similar type
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */
  it("it should get documents based on the type", done => {
    chai
      .request(server)
      .get("/users/age")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.a("object");
      });
    done();
  });
});

/**
 * Test to implement the instance methods
 * @name VirtualMethods
 * @function
 * @inner
 * @param {string} VirtualMethods - Name of test group
 * @param {callback} middleware - function with done as a param
 */

describe("Virtual Methods", () => {
  /**
   * It should fetch the documents from the database
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - function with done as a param
   */

  it("it should not get the virtual user", done => {
    chai
      .request(server)
      .get("/users/virtual")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
      });
    done();
  });
});

/**
 * Runs after all the tests
 * @name after
 * @function
 * @inner
 * @param {callback} middleware - function with done as a param
 */

after(done => {
  User.deleteOne(mongoUser);
  User.deleteOne(mongotrainer);
  done();
});
