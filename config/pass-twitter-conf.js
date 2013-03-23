
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

/**
 * passport twitter conf
 * @param app
 */
module.exports = function(app)
{
    app.set('TWITTER_APP_ID', 'key');
    app.set('TWITTER_APP_SECRET', 'key');

    // dev & production settings
    // .bashrc -> export NODE_ENV=development
    app.configure('development', function(){
        app.set('TWITTER_CALLBACK_URL', 'http://127.0.0.1:3434/auth/twitter/callback');
    });

    // .bashrc -> export NODE_ENV=production
    app.configure('production', function(){
        app.set('TWITTER_CALLBACK_URL', 'http://host.com/auth/twitter/callback');
    });


    // passport-twitter
    passport.use(new TwitterStrategy({
            consumerKey: app.get('TWITTER_APP_ID'),
            consumerSecret: app.get('TWITTER_APP_SECRET'),
            callbackURL: app.get('TWITTER_CALLBACK_URL')
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

    // twi-auth routes here

    // twitter auth
    app.get('/auth/twitter',
        passport.authenticate('twitter'),
        function(req, res){
            // The request will be redirected to Facebook for authentication, so this
            // function will not be called.
        });

    // GET /auth/twitter/callback
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/login' }),
        function(req, res) {
            req.session.cocainum_auth = 1;
            req.session.auth_type = 'twitter';
            // set user params
            require('../routes/user').set_user(req, function(){

              if(req.cookies.back_after_auth)
                res.redirect(req.cookies.back_after_auth);
              else
                res.redirect('back');

            });
        });
};
