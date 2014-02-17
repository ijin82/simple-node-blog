// userinfo middleware
exports.loadUserInfo = function(req, res, next){

  var userInfo = {};

  if (req.session.sys_auth == 1 && req.session.userInfo != null)
  {
    userInfo = req.session.userInfo;
    userInfo.auth = 1;
  } else {
    req.session.sys_auth = 0;
    userInfo.auth = 0;
  }

  req.userInfo = userInfo; // for code (current request)
  res.locals.userInfo = userInfo; // for templates

  next();
}

exports.login_form = function(req, res){
    // check auth & redirect to main
    if (req.session.sys_auth) {
        res.redirect('/');
      return;
    }

    // navigation cookie for redirect after auth
    res.cookie('back_after_auth', '/');

    // render login
    res.render('login_form',{
        title: 'Вход',
        authErr: req.flash('error')
    });
}

// set user params after successful auth
exports.set_user = function(req, next){

  var passp = req.session.passport.user;
  var dbFiled = {
    facebook: 'facebook_id',
    twitter: 'twitter_id',
    github: 'github_id'
  };

  switch (req.session.auth_type)
  {
    case 'local': // local auth
      db.getRow("SELECT * \
        FROM users \
        WHERE user_id=?",
        [
          passp.user_id
        ],
        function(err, user){
          if (err) return next(err);

          // update login time
          db.q("UPDATE users \
            SET login_date=NOW()\
            WHERE user_id=?",
            [
              user.user_id
            ], function(err){
              if (err) return next(err);

              // save userinfo
              req.session.userInfo = user;
              next();
            });
        });
    break;

    case 'github': // github auth
    case 'twitter': // twitter auth
    case 'facebook': // facebook auth

      // db field
      var field = dbFiled[req.session.auth_type];

      db.getRow("SELECT * \
        FROM users \
        WHERE " + field + "=?",
        [passp.id],
        function(err, user){
          if (err) return next(err);

          // if already authorized
          if (req.session.sys_auth && req.session.userInfo != null) {

            var userInfo = req.session.userInfo;

            // attach social to current account
            db.q("UPDATE users \
                SET " + field + "=? \
                WHERE user_id=?",
              [
                passp.id,
                userInfo.user_id
              ], function(err){
                if (err) return next(err);

                // if there was a previous account, update
                // comments & remove old attach. async
                if (user && user.user_id != userInfo.user_id) {
                  db.q("UPDATE users \
                    SET " + field + " = 0 \
                    WHERE user_id=?",
                    [
                      user.user_id
                    ]);

                  db.q("UPDATE comments \
                    SET user_id=? \
                    WHERE user_id=?",
                    [
                      userInfo.user_id,
                      user.user_id
                    ]);
                }

                db.getRow("SELECT * \
                  FROM users \
                  WHERE user_id=?",
                  [
                    userInfo.user_id
                  ], function(err, user){
                    if (err) return next(err);

                    req.flash('msg', 'link_add');
                    // save userinfo
                    req.session.userInfo = user;
                    next();
                  });
              });

          } else if(!user) {
            // no user by this field id, add new
            db.q("INSERT users \
              SET name=?,\
                  reg_date=NOW(),\
                  login_date=NOW(),\
                  " + field + "=?, \
                  role = 'user'",
              [
                passp.displayName,
                passp.id
              ], function(err, qres) {
                db.getRow("SELECT * \
                  FROM users \
                  WHERE " + field + "=?",
                  [
                    passp.id
                  ], function(err, user){
                    if (err) return next(err);

                    // save userinfo
                    req.session.userInfo = user;
                    next();
                  });
            });
          }
          else
          {
              // update login time
              db.q("UPDATE users \
                SET login_date=NOW()\
                WHERE user_id=?",
                [
                  user.user_id
                ], function(err){
                  if (err) return next(err);

                  // save userinfo
                  req.session.userInfo = user;
                  next();
                });
          }
      });
    break;
  }
}

exports.authOff = function (req, res, next)
{
  if (!req.userInfo.auth) {
    return res.redirect('back');
  }

  if (typeof req.params.social_type != 'undefined') {

    switch (req.params.social_type)
    {
      case 'facebook_id':
      case 'twitter_id':
      case 'github_id':
        db.q("UPDATE users \
          SET " + req.params.social_type + "=0 \
          WHERE user_id=?",
          [
            req.userInfo.user_id
          ], function(err){
            if (err) return next(err);

            db.getRow("SELECT * \
                  FROM users \
                  WHERE user_id=?",
              [
                req.userInfo.user_id
              ], function(err, user){
                if (err) return next(err);

                req.flash('msg', 'link_remove');
                // save userinfo
                req.session.userInfo = user;
                return res.redirect('back');
              });
          });
        break;

      default:
        return res.redirect('back');
        break;
    }

  } else {
    return res.redirect('back');
  }
}
