var passport = require('passport')
  , GithubStrategy = require('passport-github').Strategy;

/**
 * passport github conf
 * @param app
 */
module.exports = function (app) {
  // passport-github
  passport.use(new GithubStrategy({
      clientID: app.get('GITHUB_APP_ID'),
      clientSecret: app.get('GITHUB_APP_SECRET'),
      callbackURL: app.get('GITHUB_CALLBACK_URL'),
      customHeaders: { 'User-Agent': 'simple node blog app'}
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

  // github-auth routes here

  // github auth
  app.get('/auth/github',
    passport.authenticate('github'));

  // GET /auth/github/callback
  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
      req.session.sys_auth = 1;
      req.session.auth_type = 'github';
      // set user params
      require('../routes/auth').set_user(req, function () {

        if (req.cookies.back_after_auth)
          res.redirect(req.cookies.back_after_auth);
        else
          res.redirect('back');

      });
    });
};
