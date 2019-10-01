/**
 * Requiring LocalStrategy from passport
 */

const LocalStrategy = require("passport-local").Strategy;

/**
 * Importing the environment variables
 */

require("dotenv").config();
const bcrypt = require("bcryptjs");

/**
 * Passport options for the local jwt strategy
 */

const options = {
  usernameField: process.env.USERNAME_FIELD,
  password: process.env.PASSWORD_FIELD
};

/**
 * Requiring passport
 */

const passport = require("passport");
const { User } = require("../../../schema/index");

/**
 * Using passport Local Strategy
 */

passport.use(
  new LocalStrategy(options, async (email, password, done) => {
    await User.findOne({ email })
      .then(user => {
        if (user) {
          /**
           * Comparing the password using bcrypt.compare()
           */
          bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) done(err);
            if (isMatch) return done(null, user);
            return done(null, false);
          });
        }
      })
      .catch(err => done(err));
  })
);
