
var passport = require('passport')
  , GithubStrategy = require('passport-github').Strategy;

/**
 * passport github conf
 * @param app
 */
module.exports = function(app)
{
    // dev & production settings
    // .bashrc -> export NODE_ENV=development
    app.configure('development', function(){
        app.set('GITHUB_APP_ID', '--key--');
        app.set('GITHUB_APP_SECRET', '--key--');
        app.set('GITHUB_CALLBACK_URL', 'http://127.0.0.1:3434/auth/github/callback');
    });

    // .bashrc -> export NODE_ENV=production
    app.configure('production', function(){
        app.set('GITHUB_APP_ID', '111');
        app.set('GITHUB_APP_SECRET', '111');
        app.set('GITHUB_CALLBACK_URL', 'http://host.com/auth/github/callback');
    });


    // passport-github
    passport.use(new GithubStrategy({
            clientID: app.get('GITHUB_APP_ID'),
            clientSecret: app.get('GITHUB_APP_SECRET'),
            callbackURL: app.get('GITHUB_CALLBACK_URL')
        },
        function(accessToken, refreshToken, profile, done) {
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
        passport.authenticate('github'),
        function(req, res){
            // The request will be redirected to Facebook for authentication, so this
            // function will not be called.
        });

    // GET /auth/github/callback
    app.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/login' }),
        function(req, res) {
            req.session.cocainum_auth = 1;
            req.session.auth_type = 'github';
            // set user params
            require('../routes/user').set_user(req, function(){

              if(req.cookies.back_after_auth)
                res.redirect(req.cookies.back_after_auth);
              else
                res.redirect('back');

            });
        });
};
