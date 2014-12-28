function getAllTags(next) {
  db.q("SELECT t.*, count(bt.tag_id) as cnt \
    FROM  tags t \
    LEFT JOIN blog_tags bt ON t.tag_id=bt.tag_id \
    GROUP BY t.tag_id \
    ORDER BY tag_name",
    function (err, tags) {
      if (err) return next(err);

      next(err, tags);
    });
}

exports.access = function (req, res, next) {
  if (req.userInfo.role != 'admin') {
    res.redirect('/');
    return;
  }

  next();
}

exports.postsList = function (req, res, next) {
  tag_id = check.numeric(req.params.tag_id);

  if (tag_id > 0) {
    searchByTag = "INNER JOIN blog_tags bt ON bt.blog_id=b.blog_id AND bt.tag_id=" + tag_id;
    tagExclude = "";
  } else {
    searchByTag = "LEFT JOIN (\
        SELECT DISTINCT b.blog_id as exc\
        FROM blog b\
        INNER JOIN blog_tags bt ON b.blog_id=bt.blog_id\
        INNER JOIN tags t ON t.tag_id=bt.tag_id AND t.exclude=1\
      ) as t1 ON b.blog_id=t1.exc";
    tagExclude = "AND t1.exc IS NULL";
  }

  db.q("SELECT b.*\
    FROM blog  b\
    " + searchByTag + " \
    WHERE 1 " + tagExclude + " \
    ORDER BY b.blog_id DESC",
    function (err, qres) {
      if (err) return next(err);

      getAllTags(function (err, tags) {
        if (err) return next(err);

        res.render('admin/posts_list', {
          title: 'posts list',
          posts: qres,
          tag_id: tag_id,
          tags_line: tags
        });
      });
    });
}

exports.tagsList = function (req, res, next) {
  getAllTags(function (err, tags) {
    if (err) return next(err);

    res.render('admin/tags_list', {
      title: 'tags list',
      tags: tags
    });
  });
}

exports.editPost = function (req, res, next) {
  post_id = check.numeric(req.params.post_id);

  db.getRow("SELECT b.*\
        FROM blog  b\
        WHERE blog_id=?",
    [
      post_id
    ],
    function (err, post) {
      if (err) return next(err);

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
        ], function (err, tags) {
          if (err) return next(err);

          res.render('admin/edit_post', {
            title: 'edit post',
            post: post,
            tags: tags
          });
        });
    });
}

exports.changeTag = function (req, res, next) {
  postId = check.numeric(req.params.postId);

  db.getRow("SELECT b.*\
        FROM blog  b\
        WHERE blog_id=?",
    [
      postId
    ], function (err, post) {
      if (err) return next(err);

      if (!post) {
        res.json({ error: 2}); // no post by id
      }

      tagId = check.numeric(req.params.tagId);

      if (req.params.tagOper == 'add') {
        db.q("REPLACE blog_tags \
          SET tag_id=?, blog_id=?",
          [
            tagId,
            post.blog_id
          ], function (err, qres) {
            if (err) return next(err);

            res.json({ result: 1});
          });
      } else if (req.params.tagOper == 'remove') {
        db.q("DELETE FROM blog_tags \
          WHERE tag_id=? AND blog_id=?",
          [
            tagId,
            post.blog_id
          ], function (err, qres) {
            if (err) return next(err);

            res.json({ result: 2});
          });
      } else {

        res.json({ error: 4});
      }
    }); // post exists
}

exports.delTag = function (req, res, next) {
  tag_id = check.numeric(req.params.tag_id);

  if (!tag_id) {
    res.redirect('/posts-list');
    return;
  }

  db.q("DELETE \
    FROM t, bt \
    USING tags t \
    LEFT JOIN blog_tags bt ON bt.tag_id=t.tag_id \
    WHERE t.tag_id=?",
    [
      tag_id
    ], function (err, qres) {
      if (err) return next(err);

      res.redirect('back');
      return;
    });
}

exports.deletePost = function (req, res, next) {
  post_id = check.numeric(req.params.post_id);

  if (!post_id) {
    res.redirect('/posts-list');
    return;
  }

  db.q("DELETE \
    FROM b, bt \
    USING blog b \
    LEFT JOIN blog_tags bt ON bt.blog_id=b.blog_id \
    WHERE b.blog_id=?",
    [
      post_id
    ], function (err, qres) {
      if (err) return next(err);

      res.redirect('/adm/posts/');
      return;
    });
}

exports.savePost = function (req, res, next) {
  postId = check.numeric(req.body.post_id);

  if (!postId) {
    res.redirect('/adm/posts/');
    return;
  }

  if (req.body.up_date) {
    upDate = ", post_date=NOW()"
  } else {
    upDate = "";
  }

  db.getRow("SELECT * \
    FROM blog \
    WHERE blog_id=?",
    [
      postId
    ], function (err, row) {
      if (err) return next(err);

      if (row.blog_id) {
        db.q("UPDATE blog \
          SET header=?, text=?" + upDate + " \
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

exports.visiblePost = function (req, res) {
  post_id = check.numeric(req.params.post_id);

  if (!post_id) {
    res.redirect('/adm/posts/');
    return;
  }

  db.getRow("UPDATE blog \
    SET visible = !visible \
    WHERE blog_id=?",
    [
      post_id
    ], function (err, post) {
      if (err) return next(err);

      res.redirect('back');
      return;
    });
}

exports.newPost = function (req, res, next) {
  db.q("INSERT blog \
    SET post_date = NOW(), visible=0, header='', text=''",
    function (err, qres) {
      if (err) return next(err);

      db.lastId(function (err, newId) {
        if (err) return next(err);

        res.redirect('/adm/edit-post/' + newId + '/');
        return;
      });
    });
}

exports.toggleTag = function (req, res, next) {

  tagId = check.numeric(req.params.tagId);

  if (tagId >0 ) {
    db.q("UPDATE tags\
      SET exclude = !exclude\
      WHERE tag_id=?", [
        tagId
    ], function(err){
      if (err) return next(err);

      res.redirect('back');
      return;
    });
  } else {
    res.redirect('back');
    return;
  }
}

exports.addTag = function (req, res, next) {
  if (req.body.tagName != '') {

    db.getRow("SELECT * \
      FROM tags \
      WHERE tag_name = ?",
      [
        req.body.tagName
      ], function (err, row) {
        if (err) return next(err);

        if (!row) {
          db.q("INSERT tags\
            SET tag_name = ?",
            [
              req.body.tagName
            ], function (err, qres) {
              if (err) return next(err);

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
