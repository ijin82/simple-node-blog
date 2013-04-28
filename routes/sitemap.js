// get dummy .txt sitemap
exports.getMap = function (req, res, next) {

  var mapText = '';
  db.q("SELECT * \
    FROM blog \
    WHERE visible=1 \
    ORDER BY blog_id DESC", function (err, posts) {
    if (err) return next(err);

    for (i in posts) {
      mapText += 'http://cocainum.info/post/' + posts[i].blog_id + '/' + "\n";
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end(mapText);
  });
};
