/**
 * decorator for mysql
 */

var mysql = require('mysql');

var conn = mysql.createConnection({
    user: db_config.user,
    password: db_config.pass,
    host: db_config.host
});

conn.on('error', function(err) {
  console.log('no callback error: ' + err);
});

conn.query("use " + db_config.name);

// standard query
exports.q = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array))
    callee_orig = [];
  else
    callee_orig = callee;

  conn.query(sql, callee_orig, function(err, qres){

    if (err) return next(err);

    // check callback errors
    try {
      if (typeof(callee) == 'function')
        callee(err, qres);
      else if (typeof(next) == 'function')
        next(err, qres);
    } catch (err) {
      return next(err);
    }
  });
}

// get row
exports.getRow = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array))
    callee_orig = [];
  else
    callee_orig = callee;

  conn.query(sql, callee_orig, function(err, res) {

    if (!err) {
      row = (res[0]) ? res[0]: false ;
    } else {
      row = false;
    }

    // check callback errors
    try {
      if (typeof(callee) == 'function')
        callee(err, row);
      else if (typeof(next) == 'function')
        next(err, row);
    } catch (err) {
      return next(err);
    }
  });
}

// last insert id
exports.lastId = function(next){

  conn.query("SELECT LAST_INSERT_ID() as id", function sres(err, res){
    if(err) return next(err);

    var id = (res[0].id) ? res[0].id: false ;
    try {
      next(err, id);
    } catch (e) {
      return next(err);
    }

  });
}

// calc found rows
exports.foundRows = function(next){
  conn.query("select found_rows() as cnt", function(err, res){
    if(err) return next(err);

    var cnt = (res[0].cnt) ? res[0].cnt : false ;

    try {
      next(err, cnt);
    } catch (e) {
      return next(err);
    }
  });
}
