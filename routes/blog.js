/**
 * blog module
 */

// get tag for posts
function getTags(postsIds, next) {
  // post tags
  db.q("SELECT t.*, bt.blog_id \
      FROM blog_tags bt \
      INNER JOIN tags t ON t.tag_id=bt.tag_id \
      WHERE bt.blog_id IN (?)",
      [
        postsIds
      ], function tags(err, tags) {
        if (err) return next(err);

        var tagObj = {};
        for (i in tags) {
          if (typeof tagObj[tags[i].blog_id] == 'undefined')
            tagObj[tags[i].blog_id] = [tags[i]];
          else
            tagObj[tags[i].blog_id].push(tags[i]);
        }
        next(err, tagObj);
      });
}

// update comments count for selected post
function updateCommentsCount(post_id) {
  // update comments quant
  db.q("UPDATE blog \
    SET comments_cnt=( \
      SELECT COUNT(*) \
        FROM comments \
        WHERE post_id=?) \
    WHERE blog_id=?",
    [
      post_id,
      post_id
    ]);
}

// get page list with posts
exports.blogList = function (req, res, next) {
  dbPool.getConn(function(dbPage){

    var page_id = check.numeric(req.params.page_id, 1);
    if (page_id > 0) {
      page_id -= 1;
    }
    var tag_id = check.numeric(req.params.tag_id);

    // posts on page quantity
    var page_size = 5;

    if (tag_id != 0) {

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

    dbPage.q("SELECT SQL_CALC_FOUND_ROWS b.*\
      FROM blog  b \
      " + searchByTag + " \
      WHERE b.visible=1 " + tagExclude + "\
      GROUP BY b.blog_id\
      ORDER BY b.blog_id " + ((req.params.sort == 'back') ? 'ASC' : 'DESC') + " \
      LIMIT ?, ?",
      [
        page_id * page_size,
        page_size
      ], function (err, qres) {
        if (err) return next(err);

        // wrong page no posts
        if (qres.length <= 0 && page_id >= 0) {
          res.redirect('/404/');
          return;
        }

        // rows quant count
        dbPage.foundRows(function (err, cnt) {
          if (err) return next(err);

          var postsIds = [];
          for (i in qres) {
            postsIds.push(qres[i].blog_id);
          }
          getTags(postsIds, function(err, tags){
            if (err) return next(err);

            for (i in qres) {
              if (typeof tags[qres[i].blog_id] != 'undefined')
                qres[i].tags = tags[qres[i].blog_id];
              else
                qres[i].tags = [];
            }

            if (tag_id != 0) {
              pageTitle = 'tag #' + tag_id + ' - page #' + (page_id + 1);
            } else {
              pageTitle = 'page #' + (page_id + 1);
            }

            // release connection
            dbPage.release();

            res.render('blog_list', {
              posts: qres,
              pager_cnt: cnt, // total posts quant
              pager_size: page_size, // page size, posts on page
              pager_current: (page_id + 1), // current page
              tag_id: tag_id, // current tag
              tags_line: req.tags_line, // all tags array
              title: pageTitle,
              sort: (req.params.sort == 'back') ? 'back' : ''
            });
          });
        }); // foundRows
    });
  }); // getConn
}

// comments for post
function getPostComments(post_id, next) {
  db.q("SELECT c.*, u.name \
    FROM comments c \
    INNER JOIN users u ON u.user_id=c.user_id \
    WHERE post_id=? \
    ORDER BY c.comment_id ASC",
    [
      post_id
    ], function (err, comments) {
      if (err) return next(err);

      next(err, comments);
    });
}

// delete one comment
exports.delComment = function (req, res, next) {
  comment_id = check.numeric(req.params.comment_id);

  db.getRow("SELECT * \
    FROM comments \
    WHERE comment_id=?",
    [
      comment_id
    ], function (err, comment) {
      if (err) return next(err);

      if (comment) {
        // if curren user is owner of comment or admin
        if (comment.user_id == req.userInfo.user_id || req.userInfo.role == 'admin') {
          db.q("DELETE \
            FROM comments \
            WHERE comment_id=?",
            [
              comment_id
            ], function (err, qres) {
              if (err) return next(err);

              // count comments count for post, async
              updateCommentsCount(comment.post_id);
              return res.redirect('back');
            });
        } else {
          return res.redirect('back');
        }
      } else {
        return res.redirect('back');
      }
    });
}

// one blog post
exports.blogPost = function (req, res, next) {
  post_id = check.numeric(req.params.post_id);

  db.getRow("SELECT b.* \
        FROM blog b \
        WHERE blog_id=?",
    [post_id],
    function sres(err, post) {

      if (err) return next(err);

      // wrong page no posts
      if (!post) {
        return res.redirect('/404');
      }

      // navigation cookie for redirect after auth
      res.cookie('back_after_auth', req.path);

      // post tags
      db.q("SELECT t.* \
            FROM blog_tags bt \
            INNER JOIN tags t ON t.tag_id=bt.tag_id \
            WHERE bt.blog_id=?",
        [
          post.blog_id
        ], function (err, tags) {
          if (err) return next(err);

          getPostComments(post.blog_id, function (err, comments) {
            if (err) return next(err);

            // render post page
            res.render('blog_post', {
              fullTitle: post.header,
              post: post,
              host: req.headers.host,
              tags: tags,
              comments: comments
            });
          });
        }); // close post tags query
    }); // close post db query
}

// tags in header
exports.tagsLine = function (req, res, next) {
  db.q("SELECT t.*\
        FROM tags t \
        INNER JOIN blog_tags bt ON bt.tag_id=t.tag_id \
        GROUP BY t.tag_id \
        ORDER BY tag_name",
    function (err, tags) {
      if (err) return next(err);

      req.tags_line = tags;
      next();
    });
}

// add comment
exports.newComment = function (req, res) {
  post_id = check.numeric(req.body.post_id);

  if (req.userInfo.auth == 1) {

    db.getRow("SELECT * \
      FROM blog \
      WHERE blog_id=?",
      [
        post_id
      ], function (err, post) {
        if (err) return next(err);

        if (post) {
          db.q("INSERT comments \
            SET post_id=?, user_id=?, pub_date=NOW(), text=?",
            [
              post_id,
              req.userInfo.user_id,
              req.body.text
            ], function (err, res) {
              if (err) return next(err);

              // count commets count for post, async
              updateCommentsCount(post.blog_id);

              db.lastId(function (err, commentId) {
                if (err) return next(err);

                // send email
                if (appConfig.send_comment_notice && appConfig.comment_notice_email) {
                  var Email = require('email').Email;
                  new Email(
                    { from: "noreply@" + req.headers.host,
                      to: appConfig.comment_notice_email,
                      subject: "Новый комментарий #" + commentId,
                      body: "Пользователь " + req.userInfo.name +
                        " оставил новый комментарий в блоге: http://" +
                        req.headers.host + "/post/" + post.blog_id + "/"
                    }).send(function (err) {
                      // gag for errors
                      console.log('cant send email now for comment #' + commentId);
                    });
                }
              }); // last id
            }); // get comments
        }

      });
  }

  // go back
  if (post_id > 0) {
    res.redirect('/post/' + post_id + '/');
    return;
  } else {
    res.redirect('/');
    return;
  }

}

exports.blogPostsList = function (req, res, next) {
  tag_id = check.numeric(req.params.tag_id);

  if (tag_id != 0) {
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

  db.q("SELECT b.* \
      FROM blog  b \
      " + searchByTag + " \
      WHERE b.visible=1 " + tagExclude + "\
      ORDER BY b.blog_id DESC",
    function (err, qres) {
      if (err) return next(err);

      res.render('blog_posts_list', {
        title: 'full list of notes',
        posts: qres,
        tags_line: req.tags_line,
        tags_line_link: 'full-list',
        tag_id: tag_id
      });
    });
}
