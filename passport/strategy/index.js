/**
 * Initializing JWTStrategy from passport
 */
const JWTStrategy = require("passport-jwt").Strategy;

/**
 * Importing the environment variables
 */
require("dotenv").config();

/**
 * Extracting the jwt token from the passport
 */
const ExtractJWT = require("passport-jwt").ExtractJwt;

/**
 * Requiring passport
 */
const passport = require("passport");

/**
 * Passport options as to from where to extract the JWT
 */
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

/**
 * Using JWT Strategy
 */
passport.use(
  new JWTStrategy(options, async function(jwtPayload, done) {
    await findById(jwtPayload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => done(err));
  })
);
