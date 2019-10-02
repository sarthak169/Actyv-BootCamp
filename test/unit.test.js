const { User } = require("../01-Database/02-Schema/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const should = chai.should();
const HttpStatus = require("http-status-codes");

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

before(done => {
  User.create([dummyUser, testUser], (err, users) => {
    mongoUser = users[0];
    mongotrainer = users[1];
    done();
  });
});

/**
 * Unit test to create the new user
 */
describe("Create User", () => {
  /**
   * It should create user with give data
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
        res.should.have.status(HttpStatus.OK);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("User created");
      });
    done();
  });

  /**
   * It should not create the new user
   */
  it("it should not create the user", done => {
    let user;
    chai
      .request(server)
      .post("/users/create")
      .send(user)
      .end((err, res) => {
        res.should.have.status(HttpStatus.BAD_REQUEST);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Missing Constraints");
      });
    done();
  });
});

/**
 * To read the existing user
 */
describe("Reading User", () => {
  /**
   * It should read the user from mongoDB
   */
  it("it should read the user", done => {
    chai
      .request(server)
      .get(`/users/read/${mongoUser._id}`)
      .end((err, res) => {
        res.should.have.status(HttpStatus.BAD_REQUEST);
        res.body.should.be.a("object");
      });
    done();
  });
  /**
   * It should not read the user from mongoDB
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
        res.should.have.status(HttpStatus.BAD_REQUEST);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Error fetching");
      });
    done();
  });
});

/**
 * Test for updating the existing user
 */
describe("Update the user", () => {
  /**
   * It should update the user in database
   */
  it("it should update the user", done => {
    chai
      .request(server)
      .put(`/users/update/${mongotrainer._id}`)
      .send({
        working: true
      })
      .end((err, res) => {
        res.should.have.status(HttpStatus.OK);
        res.body.should.be.a("object");
        res.body.should.have.property("firstname").eql("aarya");
      });
    done();
  });
  /**
   * It should not update the user
   */
  it("it should not update the user", done => {
    let date = "24-09-1990";
    chai
      .request(server)
      .put(`/users/update/${mongoUser._id}`)
      .send(date)
      .end((err, res) => {
        res.should.have.status(HttpStatus.BAD_REQUEST);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("Update failed");
      });
    done();
  });
});

/**
 * Test for deleting the user from database
 */
describe("Deleting User", () => {
  /**
   * It should delete the existing user
   */
  it("it should delete the user of id", done => {
    chai
      .request(server)
      .delete(`/users/delete/${mongoUser._id}`)
      .end((err, res) => {
        res.should.have.status(HttpStatus.OK);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("User Removed");
      });
    done();
  });
  /**
   * It should not able to delete
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
        res.should.have.status(HttpStatus.BAD_REQUEST);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql("Request cannot be processed");
      });
    done();
  });
});

after(done => {
  User.deleteOne(mongoUser);
  User.deleteOne(mongotrainer);
  done();
});
