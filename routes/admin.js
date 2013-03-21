exports.access = function(req, res, next)
{
  if (req.userInfo.role != 'admin') {
    res.redirect('/');
    return;
  }

  next();
}

exports.postsList = function(req, res)
{
  try{
    check(req.params.tag_id).is(/^[0-9]+$/);
    tag_id = req.params.tag_id;
  }catch(e){
    tag_id=0;
  }

  if (tag_id > 0)
    searchByTag = "INNER JOIN blog_tags bt ON bt.blog_id=b.blog_id AND bt.tag_id="+tag_id;
  else
    searchByTag = "";

  db.q("SELECT b.*\
    FROM blog  b\
    "+ searchByTag + " \
    ORDER BY b.blog_id DESC",
    function(qres) {
      db.getRow("SELECT * \
        FROM tags \
        WHERE tag_id=?",
        [
          tag_id
        ], function(tag){

          res.render('admin/posts_list', {
            title: 'cocainum posts list',
            posts: qres,
            tag: tag
          });
        });
    });
}

exports.tagsList = function(req, res)
{
  db.q("SELECT t.*, count(bt.tag_id) as cnt \
    FROM  tags t \
    LEFT JOIN blog_tags bt ON t.tag_id=bt.tag_id \
    GROUP BY t.tag_id \
    ORDER BY tag_name",
    function(tags) {
      res.render('admin/tags_list', {
        title: 'cocainum tags list',
        tags: tags
      });
    });
}

exports.editPost = function(req, res)
{
  try{
    check(req.params.post_id).is(/^[0-9]+$/);
    post_id = req.params.post_id;
  }catch(e){
    res.redirect('/adm/posts/');
    return;
  }

  db.getRow("SELECT b.*\
        FROM blog  b\
        WHERE blog_id=?",
    [
      post_id
    ],
    function sres(post) {

      if (!post) {
        res.redirect('/adm/posts/');
        return;
      }

      db.q("SELECT t.*, if(t1.tag_id>0, 1, 0) as ex \
        FROM tags t \
        LEFT JOIN ( \
          SELECT tag_id \
          FROM blog_tags \
          WHERE blog_id=? \
        ) as t1 ON t1.tag_id=t.tag_id \
        ORDER BY t.tag_name",
        [
            post.blog_id
        ], function(tags){
        res.render('admin/edit_post', {
          title: 'cocainum edit post',
          post: post,
          tags: tags
        });

      });
    });
}

exports.changeTag = function(req, res)
{
  try{

    check(req.params.postId).is(/^[0-9]+$/);
    postId = req.params.postId;
  } catch(e) {

    res.json({ error: 1}); // postId is not int
  }

  db.getRow("SELECT b.*\
        FROM blog  b\
        WHERE blog_id=?",
    [
      postId
    ],
    function sres(post) {
      if (!post) {
        res.json({ error: 2}); // no post by id
      }

      try {
        check(req.params.tagId).is(/^[0-9]+$/);
        tagId = req.params.tagId;
      } catch (e) {
        res.json({ error: 3}); // tagId is not int
      }

      if (req.params.tagOper == 'add') {
        db.q("REPLACE blog_tags \
          SET tag_id=?, blog_id=?",
          [
            tagId,
            post.blog_id
          ], function(qres){
            res.json({ result: 1});
          });
      } else if (req.params.tagOper == 'remove') {
        db.q("DELETE FROM blog_tags \
          WHERE tag_id=? AND blog_id=?",
          [
            tagId,
            post.blog_id
          ], function(qres){
            res.json({ result: 2});
          });
      } else {

        res.json({ error: 4});
      }
    }); // post exists
}

exports.delTag = function(req, res)
{
  try{

    check(req.params.tag_id).is(/^[0-9]+$/);
    tag_id = req.params.tag_id;
  }catch(e){

    res.redirect('/posts-list');
    return;
  }

  db.getRow("DELETE \
    FROM t, bt \
    USING tags t \
    LEFT JOIN blog_tags bt ON bt.tag_id=t.tag_id \
    WHERE t.tag_id=?",
    [
      tag_id
    ],
    function sres(post) {

      res.redirect('back');
      return;
    });
}

exports.deletePost = function(req, res)
{
  try{

    check(req.params.post_id).is(/^[0-9]+$/);
    post_id = req.params.post_id;
  }catch(e){

    res.redirect('/posts-list');
    return;
  }

  db.getRow("DELETE \
    FROM b, bt \
    USING blog b \
    LEFT JOIN blog_tags bt ON bt.blog_id=b.blog_id \
    WHERE b.blog_id=?",
    [
      post_id
    ],
    function sres(post) {

      res.redirect('/adm/posts/');
      return;
    });
}

exports.savePost = function(req, res)
{
  // post_id
  try{
    check(req.body.post_id).is(/^[0-9]+$/);
    postId=req.body.post_id;
  }catch(e){

    res.redirect('/adm/posts/');
    return;
  }

  db.getRow("SELECT * \
    FROM blog \
    WHERE blog_id=?",
    [
      postId
    ],function(row){

      if (row.blog_id) {
        db.q("UPDATE blog \
          SET header=?, text=? \
          WHERE blog_id=?",
          [
            req.body.header,
            req.body.text,
            postId
          ]);
        res.redirect('back');
        return;
      } else {

        res.redirect('/posts-list/');
        return;
      }
  });
}

exports.visiblePost = function(req, res)
{
  try{

    check(req.params.post_id).is(/^[0-9]+$/);
    post_id = req.params.post_id;
  }catch(e){

    res.redirect('/adm/posts/');
    return;
  }

  db.getRow("UPDATE blog \
    SET visible = !visible \
    WHERE blog_id=?",
    [
      post_id
    ],
    function sres(post) {

      res.redirect('back');
      return;
    });
}

exports.newPost = function(req, res)
{
  db.q("INSERT blog \
    SET post_date = NOW()",
    function(qres) {
      db.lastId(function(newId){
        res.redirect('/adm/edit-post/'+ newId + '/');
        return;
      });
    });
}

exports.addTag = function(req, res)
{
  if (req.body.tagName != '') {

    db.getRow("SELECT * \
      FROM tags \
      WHERE tag_name = ?",
      [
        req.body.tagName
      ], function(row){

        if (!row) {
          db.q("INSERT tags\
            SET tag_name = ?",
            [
              req.body.tagName
            ], function(qres) {
              res.redirect('back');
              return;
            });
        } else
          res.redirect('back');
          return;
      });
  } else {
    res.redirect('back');
    return;
  }
}
