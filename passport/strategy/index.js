/**
 * Requiring JWTStrategy from passport
 */
const JWTStrategy = require("passport-jwt").Strategy;

/**
 * Importing the environment variables
 */
require("dotenv").config();

/**
 * It containes different strategies for extracting JWT from headers
 */
const ExtractJWT = require("passport-jwt").ExtractJwt;

/**
 * Passport options as to from where to extract the JWT
 */
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: process.env.JWT_SECRET
};

/**
 * Requiring passport
 */
const passport = require("passport");
const { User } = require("../../schema/index");

/**
 * Using JWT Strategy
 */
passport.use(
  new JWTStrategy(options, async function(jwtPayload, done) {
    await User.findById({ _id: jwtPayload.id })
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => done(err));
  })
);
