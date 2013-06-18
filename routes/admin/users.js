exports.usersList = function (req, res, next) {
  db.q("SELECT * \
    FROM users \
    ORDER BY `name`",
    function (err, qres) {
      res.render('admin/users_list', {
        title: 'users list',
        users: qres
      });
    });
};

exports.setUserRole = function (req, res, next) {

  // all roles list hardcoded
  var availRoles = ['user', 'writer', 'admin'];

  // params for change role
  var userId = check.numeric(req.params.userId, 0);
  var userRole = (availRoles.indexOf(req.params.role) >= 0) ? req.params.role : null;

  // check current user role
  if (userRole !== null) {
    if (req.userInfo.role == 'admin') {
      db.q("UPDATE users \
        SET role=? \
        WHERE user_id=?",
      [
        userRole,
        userId
      ], function (err, qres) {
          if (err) return next(err);

          res.json({
            result: true,
            role: userRole,
            userId: userId});
        });
    } else {
      res.json({ result: false});
    }
  } else {
    res.json({ result: false});
  }
};

exports.delUser = function (req, res, next) {

  var userId = check.numeric(req.params.userId, 0);

  // check if user has comments
  db.q("SELECT *\
    FROM comments\
    WHERE user_id=?\
    LIMIT 1",
  [
      userId
  ], function (err, qres) {
    if (err) return next(err);

    if (!qres.length) {
      db.q("DELETE \
        FROM users\
        WHERE user_id=?",
      [
          userId
      ]);
    }
  });

  res.redirect('back');
};
