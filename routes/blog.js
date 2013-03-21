/**
 * blog module
 */

var counters = { tags:0 };

// select all tags for selected post
function getBlogTags(blog_id, pKey, next)
{
    counters.tags++;

    // post tags
    db.q("SELECT t.* \
                FROM blog_tags bt \
                INNER JOIN tags t ON t.tag_id=bt.tag_id \
                WHERE bt.blog_id=?",
        [
          blog_id
        ], function tags(tags) {

            counters.tags--;

            next(tags, pKey);

        }); // close post tags query
}

// update comments count for selected post
function updateCommentsCount(post_id)
{
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
exports.blog_list = function(req, res)
{
    // page id
    try{
        check(req.params.page_id).is(/^[0-9]+$/);
        page_id=req.params.page_id;

    }catch(e){
        page_id=0;
    }

    // tag id
    try{
        check(req.params.tag_id).is(/^[0-9]+$/);
        tag_id=req.params.tag_id;

    }catch(e){
        tag_id=0;
    }

    // posts on page quantity
    page_size = 5;

    if (tag_id != 0)
        searchByTag = "INNER JOIN blog_tags bt ON bt.blog_id=b.blog_id AND bt.tag_id=" + tag_id;
    else
        searchByTag = "";

    db.q("SELECT SQL_CALC_FOUND_ROWS b.*\
      FROM blog  b \
      " + searchByTag + " \
      WHERE b.visible=1 \
      ORDER BY b.blog_id DESC \
      LIMIT ?, ?",
      [
        page_id*page_size,
        page_size
      ], function(qres) {

            // wrong page no posts
            if(qres.length<=0 && page_id>=0) {
                res.redirect('/404/');
              return;
            }

            // rows quant count
            db.foundRows(function(cnt){

                for(i in qres)
                {
                    getBlogTags(qres[i].blog_id, i, function(tags, pKey){
                        qres[pKey].tags = tags;

                        // render blog page
                        if(counters.tags == 0)
                        {
                            res.render('blog_list', {
                                title: 'simple node blog shoo shooo',
                                posts: qres ,
                                pager_cnt: cnt, // total posts quant
                                pager_size: page_size, // page size, posts on page
                                pager_current: page_id, // current page
                                tag_id: tag_id, // current tag
                                tags_line: req.tags_line // all tags array
                            });
                        }
                    });
                }
            });
        });

}

// comments for post
function getPostComments(post_id, next)
{
  db.q("SELECT c.*, u.name \
    FROM comments c \
    INNER JOIN users u ON u.user_id=c.user_id \
    WHERE post_id=? \
    ORDER BY c.comment_id ASC",
    [
      post_id
    ], function(comments) {
      next(comments);
    });
}

// delete one comment
exports.del_comment = function(req, res)
{
  try{

    check(req.params.comment_id).is(/^[0-9]+$/);
    comment_id = req.params.comment_id;

  }catch(e){

    res.redirect('back');
    return;
  }

  db.getRow("SELECT * \
    FROM comments\
    WHERE comment_id=?",
    [comment_id],
    function(comment){

      if(comment)
      {
        // if curren user is owner of comment or admin
        if( comment.user_id == req.userInfo.user_id
          || req.userInfo.role == 'admin')
        {
          db.q("DELETE \
            FROM comments \
            WHERE comment_id=?",
            [
              comment_id
            ]);

          // count comments count for post, async
          updateCommentsCount(comment.post_id);
        }
      }

      res.redirect('back');
      return;
    });
}

// one blog post
exports.blog_post = function(req, res)
{
    try{

        check(req.params.post_id).is(/^[0-9]+$/);
        page_id=req.params.post_id;

    }catch(e){

        page_id=0;

    }

    db.getRow("SELECT b.*\
        FROM blog  b\
        WHERE blog_id=?",
        [page_id],
        function sres(post){

            // wrong page no posts
            if(!post) {
              res.redirect('/404');
              return;
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
                ], function(tags) {
                    getPostComments(post.blog_id, function(comments){
                      // render post page
                      res.render('blog_post',{
                        title: post.header,
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
exports.tags_line = function(req, res, next)
{
    db.q("SELECT t.*\
        FROM tags t \
        INNER JOIN blog_tags bt ON bt.tag_id=t.tag_id \
        GROUP BY t.tag_id \
        ORDER BY tag_name",
        function(tags) {
            req.tags_line = tags;
            next();
        });
}

// add comment
exports.comment = function(req, res)
{
  // post_id
  try{
    check(req.body.post_id).is(/^[0-9]+$/);
  }catch(e){
    req.body.post_id=0;
  }

  if(req.userInfo.auth == 1)
  {

    db.getRow("SELECT * \
      FROM blog \
      WHERE blog_id=?",
      [req.body.post_id],
      function(post){

        if (post)
        {
          db.q("INSERT comments \
            SET post_id=?, user_id=?, pub_date=NOW(), text=?",
            [
              req.body.post_id,
              req.userInfo.user_id,
              req.body.text
            ], function(res){
              // count commets count for post, async
              updateCommentsCount(post.blog_id);

              db.lastId(function(comment_id){
                // send email
                var Email = require('email').Email
                new Email(
                  { from: "noreply@host.com"
                    , to:   "test@test.com"
                    , subject: "Новый комментарий #" +comment_id
                    , body: "Пользователь " + req.userInfo.name +
                      " оставил новый комментарий в блоге: http://host.com/post/" +
                    post.blog_id + "/"
                  }).send(function(err){
                    // gag for errors
                    console.log('cant send email now');
                  });
              });
          });
        }

      });
  }

  // go back
  if(req.body.post_id>0) {
    res.redirect('/post/' +req.body.post_id+ '/');
    return;
  } else {
    res.redirect('/');
    return;
  }

}

exports.blog_posts_list = function(req, res)
{
    db.q("SELECT b.*\
        FROM blog  b\
        WHERE b.visible=1 \
        ORDER BY b.blog_id DESC",
        function(qres) {
            res.render('blog_posts_list', {
                title: 'simple node blog full list of notes',
                posts: qres
            });
        });
}
