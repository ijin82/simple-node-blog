module.exports = function (app, admin) {
  // users list
  app.get('/adm/users/:page_id?', admin.usersList);
}
