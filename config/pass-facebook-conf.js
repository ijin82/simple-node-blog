var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

/**
 * passport facebook conf
 * @param app
 */
module.exports = function (app) {
  // passport-facebook
  passport.use(new FacebookStrategy({
      clientID: app.get('FACEBOOK_APP_ID'),
      clientSecret: app.get('FACEBOOK_APP_SECRET'),
      callbackURL: app.get('FACEBOOK_CALLBACK_URL')
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {

        // To keep the example simple, the user's Facebook profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Facebook account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  ));

  // fb-auth routes here

  // facebook auth
  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  // GET /auth/facebook/callback
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
      req.session.sys_auth = 1;
      req.session.auth_type = 'facebook';
      // set user params
      require('../routes/auth').set_user(req, function () {

        if (req.cookies.back_after_auth)
          res.redirect(req.cookies.back_after_auth);
        else
          res.redirect('back');

      });
    });
};
