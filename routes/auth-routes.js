module.exports = function(app, obj)
{
  // load userInfo all requests
  app.all('*', obj.loadUserInfo);

  // auth form on site
  app.get('/login', obj.login_form);

  // logout
  app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('back');
  });

  // remove social attach
  app.get('/auth-off/:social_type', obj.authOff);
}
