// get dummy .txt sitemap
exports.getMap = function(req, res, next){

  var mapText = '';
  db.q("SELECT * \
    FROM blog \
    WHERE visible=1 \
    ORDER BY blog_id DESC",function(err, posts){
      if (err) return next(err);

      for(i in posts){
        mapText += 'http://' + req.host + '/post/' + posts[i].blog_id + '/' + "\n";
      }

      res.setHeader('Content-Type', 'text/plain');
      res.end(mapText);
  });
};


exports.getRobots = function(req, res, next) {

  var robotsTxt = 'User-agent: *\n\
Allow: /\n\
Sitemap: http://' + req.host + '/sitemap.txt\n\
';

  res.setHeader('Content-Type', 'text/plain');
  res.end(robotsTxt);
};