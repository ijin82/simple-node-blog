// userinfo middleware
exports.loadUserInfo = function(req, res, next){

  if (req.session.cocainum_auth == 1 && typeof req.session.userInfo == 'object')
  {
    userInfo = req.session.userInfo;
    userInfo.auth = 1;
  }
  else
    userInfo = {
      auth: 0
    };

  req.userInfo = userInfo; // for code
  res.locals.userInfo = userInfo; // for templates

  next();
}

exports.login_form = function(req, res){

    // check auth & redirect to main
    if (req.session.cocainum_auth) {
        res.redirect('/');
      return;
    }

    // navigation cookie for redirect after auth
    res.cookie('back_after_auth', '/');

    // render login
    res.render('login_form',{
        title: 'Вход на сайт'
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
console.log(req.session.auth_type);
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
console.log(user, '-------------------');
          // save userinfo
          req.session.userInfo = user;
          next();
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

          if(!user) // no user by this field id
          {
            db.q("INSERT users \
              SET name=?,\
                  reg_date=NOW(),\
                  " + field + "=?, \
                  role = 'user'",
              [
                passp.displayName,
                passp.id
              ], function(qres) {
                db.getRow("SELECT * \
                  FROM users \
                  WHERE " + field + "=?",
                  [
                    passp.id
                  ], function(user){
                      // save userinfo
                    req.session.userInfo = user;
                    next();
                  });
            });
          }
          else
          {
            // save userinfo
            req.session.userInfo = user;
            next();
          }
      });
    break;
  }
}
