
/**
 * decorator for mysql class
 */

var mysql = require('mysql');
var db_config = require('./db_config');

var db = mysql.createConnection({
    user: db_config.user,
    password: db_config.pass,
    host: db_config.host
});

db.query("use " + db_config.name);

// standard query
exports.q = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array))
    callee_orig = [];
  else
    callee_orig = callee;

  db.query(sql, callee_orig, function(err, qres){
    if(err)
      throw new Error(err);

    if (typeof(callee) == 'function')
      callee(qres);
    else if (typeof(next) == 'function')
      next(qres);
  });
}

// get row
exports.getRow = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array))
    callee_orig = [];
  else
    callee_orig = callee;

  db.query(sql, callee_orig, function sres(err, res){

    if(err)
      throw new Error(err);

    row = (res[0]) ? res[0]: false ;

    if (typeof(callee) == 'function')
      callee(row);
    else if (typeof(next) == 'function')
      next(row);
  });
}

// last insert id
exports.lastId = function(next){

  db.query("SELECT LAST_INSERT_ID() as id", function sres(err, res){
    if(err)
      throw new Error(err);

    var id = (res[0].id) ? res[0].id: false ;
    next(id);

  });
}

// calc found rows
exports.foundRows = function(next){
  db.query("select found_rows() as cnt", function(err, res){
    if(err)
      throw new Error(err);
    var cnt = (res[0].cnt) ? res[0].cnt : false ;

    next(cnt);
  });
}
