// init passport
var passport = require('passport');

/**
 * passport loads
 *
 * @param app
 */
module.exports = function (app) {
  // serialize required
  passport.serializeUser(function (user, next) {
    next(null, user);
  });

  // deserialize required
  passport.deserializeUser(function (obj, next) {
    next(null, obj);
  });

  // init passport & passport session
  app.use(passport.initialize());
  app.use(passport.session());
};
