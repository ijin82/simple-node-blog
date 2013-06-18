module.exports = function (app, admin) {
  // users list
  app.get('/adm/users/:page_id?', admin.usersList);

  // change user role
  app.get('/adm/set-user-role/:userId/:role', admin.setUserRole);

  // delete user
  app.get('/adm/delete-user/:userId', admin.delUser);
}
