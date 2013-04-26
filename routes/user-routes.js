module.exports = function(app, user)
{
  // load userInfo all requests
  app.all('*', user.loadUserInfo);

  // auth form on site
  app.get('/login', user.login_form);

  // logout
  app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('back');
  });

  // remove social attach
  app.get('/auth-off/:social_type', user.authOff);
}
