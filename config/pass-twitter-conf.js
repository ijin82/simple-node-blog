var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

/**
 * passport twitter conf
 * @param app
 */
module.exports = function (app) {
  // passport-twitter
  passport.use(new TwitterStrategy({
      consumerKey: app.get('TWITTER_APP_ID'),
      consumerSecret: app.get('TWITTER_APP_SECRET'),
      callbackURL: app.get('TWITTER_CALLBACK_URL')
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

  // twi-auth routes here

  // twitter auth
  app.get('/auth/twitter',
    passport.authenticate('twitter'));

  // GET /auth/twitter/callback
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
      req.session.sys_auth = 1;
      req.session.auth_type = 'twitter';
      // set user params
      require('../routes/auth').set_user(req, function () {

        if (req.cookies.back_after_auth)
          res.redirect(req.cookies.back_after_auth);
        else
          res.redirect('back');

      });
    });
};
