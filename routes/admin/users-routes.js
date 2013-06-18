module.exports = function (app, admin) {
  // users list
  app.get('/adm/users/:page_id?', admin.usersList);

  // users list
  app.get('/adm/set-user-role/:userId/:role?', admin.setUserRole);
}
