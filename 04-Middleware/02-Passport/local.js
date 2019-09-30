/** Local Strategy
 * @module strategy/local
 */

/**
 * @namespace localStrategy
 */

/**
 * Requiring passport
 * @const
 */

const passport = require("passport");

const { findUserByEmail } = require("../../01-Database/03-Model/index");

/**
 * Requiring LocalStrategy from passport
 * @const
 */

const LocalStrategy = require("passport-local").Strategy;

/**
 * @typedef {Object} options
 * @property {string} username - field/json property name in request body
 * @property {string} password - field/json property name in request body
 */

const options = {
  usernameField: process.env.USERNAME_FIELD,
  passwordField: process.env.PASSWORD_FIELD
};

/**
 * Adding Local Strategy
 * @name use
 * @function
 * @memberof module:strategy/local~localStrategy
 * @inner
 * @param {Object} LocalStrategyOptions - Local Strategy Options
 */

passport.use(
  new LocalStrategy(
    options,
    /**
     * Callback Function
     * @function
     * @inner 
     * @param {string} email - Username Field Value
     * @param {string} password - Password Field Value
     * @param {callback} done - Next function
     */
    async (email, password, done) => {
      // Fetch User By Email
      const user = await findUserByEmail(email);
      if (!user) return done(null, false, { message: "User Not found" });

      // Validate Password
      const validate = await user.isCorrectPassword(password);
      if (!validate) return done(null, false, { message: "Wrong Password" });

      return done(null, user, { message: "Login Success" });
    }
  )
);


/**
 * Initializing Passport
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} initialize - Midddleware
 */

app.use(passport.initialize());


