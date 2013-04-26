module.exports = function(app, obj)
{
  // check access
  app.all('/my/*', obj.access);

  // auth form on site
  app.get('/my/profile', obj.viewProfile);

  // saveProfile
  app.post('/my/saveProfile', obj.saveProfile);

}
