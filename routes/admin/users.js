exports.usersList = function(req, res, next)
{
  db.q("SELECT * \
    FROM users \
    ORDER BY `name`",
    function(err, qres){
      res.render('admin/users_list', {
        title: 'cocainum users list',
        users: qres
      });
    });
}
