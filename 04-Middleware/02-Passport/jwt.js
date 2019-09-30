/** JWT Strategy
 * @module strategy/jwt
 */

/**
 * @namespace jwtStrategy
 */

/**
 * Requiring passport
 * @const 
 */
const passport = require("passport");

/**
 * Requiring JWTStrategy from passport
 * @const
 */
const JWTStrategy = require("passport-jwt").Strategy;

/**
 * Function which returns the JWT
 */
const ExtractJWT = require("passport-jwt").ExtractJwt;

/**
 * @typedef {Object} options
 * @property {function} ExtractJWT - Function which returns JWT
 * @property {string} secretOrKey - JWT secret
 */
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
  /**
   * Adding JWT Strategy
   * @name use
   * @function
   * @memberof module:strategy/jwt~jwtStrategy
   * @inner
   * @param {Object} JWTStrategyOptions - JWT Strategy Options
   */
  passport.use(
    new JWTStrategy(
      options,
      /**
       * Callback Function
       * @function
       * @inner
       * @param {object} jwtPayload - Decrypted JWT payload
       * @param {callback} done - Next function
       */
      async function(jwtPayload, done) {
        await findById(jwtPayload.id).then(user => {
          return done(null, user);
        });
      }
    )
  );
};
