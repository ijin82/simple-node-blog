var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

/**
 * passport local conf
 * @param app
 */
module.exports = function(app)
{
    passport.use(new LocalStrategy(
        function(login, pass, next) {

          db.getRow("SELECT * \
            FROM users \
            WHERE login=? AND pass=md5(?)\
              AND login<>'' AND pass<>''",
            [
              login,
              pass
            ], function(err, user){
              if (err) return next(err);

              if(!user) {
                return next(null, false);
              }

              return next(null, user);
          });
        }
    ));

    // local auth routes here
    app.post('/auth/local',
        passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'passport-error' }),
        function(req, res) {
          req.session.sys_auth = 1;
          req.session.auth_type = 'local';
          // set user params
          require('../routes/auth').set_user(req, function(){
            res.redirect('/');
          });
    });
};
