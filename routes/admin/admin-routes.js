module.exports = function (app, admin) {
  // check access
  app.all('/adm/*', admin.access);
  // posts list
  app.get('/adm/posts/:tag_id?', admin.postsList);
  // tags list
  app.get('/adm/tags', admin.tagsList);
  // delete tag
  app.get('/adm/del-tag/:tag_id', admin.delTag);
  // edit post
  app.get('/adm/edit-post/:post_id', admin.editPost);
  // delete post
  app.get('/adm/del-post/:post_id', admin.deletePost);
  // save post
  app.post('/adm/save-post/', admin.savePost);
  // visible post
  app.get('/adm/post-visible/:post_id', admin.visiblePost);
  // new post
  app.get('/adm/post-new', admin.newPost);
  // change tag
  app.get('/adm/change-tag/:postId/:tagOper/:tagId', admin.changeTag);
  // add tag
  app.post('/adm/add-tag', admin.addTag);
  // toggle tag
  app.get('/adm/toggle-tag/:tagId', admin.toggleTag);
}
