// access to user zone
exports.access = function(req, res, next){
  if (req.userInfo.auth != 1) {
    return res.redirect('/');
  }

  next();
};

// userinfo middleware
exports.viewProfile = function(req, res, next){

  // navigation cookie for redirect after auth
  res.cookie('back_after_auth', req.path);

  res.render('profile', {
    msg: req.flash('msg'),
    warn: req.flash('warn')
  });
};

exports.saveProfile = function(req, res, next)
{
  if (typeof  req.body.name != 'undefined' && !req.body.name.match(/^([ ]+|)$/i)) {
    if (req.body.name.match(/^[a-z0-9а-я\ \_\-]+$/i)) {
      // async update
      db.q("UPDATE users \
        SET `name`=? \
        WHERE user_id=?",
        [
            req.body.name,
            req.userInfo.user_id
        ]);

      req.flash('msg', 'name_saved');
      req.session.userInfo.name = req.body.name;
      return res.redirect('back');

    } else {
      req.flash('warn', 'wrong_name');
      return res.redirect('back');
    }

  } else {
    req.flash('warn', 'empty_name');
    return res.redirect('back');
  }
};
