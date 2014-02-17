module.exports = function(app, obj)
{
  // main rss feed
  app.get('/rss/main.rss', obj.getMain);

}
