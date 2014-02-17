module.exports = function(app, blog)
{
  // main page
  app.get('/', blog.tagsLine, blog.blogList);

  // main page with paging
  app.get('/page/:page_id/:sort?', blog.tagsLine, blog.blogList);

  // page_id can be unset, marked with "?" after var name
  app.get('/tag/:tag_id/:page_id?/:sort?', blog.tagsLine, blog.blogList);

  // single post page
  app.get('/post/:post_id', blog.blogPost);

  // full posts listing
  app.get('/full-list/:tag_id?', blog.tagsLine, blog.blogPostsList);

  // add comment
  app.post('/comment', blog.newComment);

  // del comment
  app.get('/delcomment/:comment_id', blog.delComment);
}
