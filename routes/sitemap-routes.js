module.exports = function(app, obj)
{
  // auth form on site
  app.get('/sitemap.txt', obj.getMap);

  app.get('/robots.txt', obj.getRobots);

}
