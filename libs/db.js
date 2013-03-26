/**
 * decorator for mysql
 */
var mysql = require('mysql'),
    conn = mysql.createConnection(dbConfig);

// standard query
exports.q = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array)) {
    calleeSend = [];
  } else {
    calleeSend = callee;
  }

  conn.query(sql, calleeSend, function(err, qres){
    if (err){
      if (typeof(callee) == 'function') {
        return callee(err);
      } else if (typeof(next) == 'function') {
        return next(err);
      } else {
        console.log('Uncaught DB error: ', err);
        console.log('Uncaught error in query: ', sql);
      }
    }

    try {
      if (typeof(callee) == 'function') {
        callee(err, qres);
      } else if (typeof(next) == 'function') {
        next(err, qres);
      }
    } catch(e) {
      next(e);
    }

  });
};

// get row
exports.getRow = function(sql, callee, next){

  if (typeof(callee) != 'object' || !(callee instanceof Array)) {
    calleeSend = [];
  } else {
    calleeSend = callee;
  }

  conn.query(sql, calleeSend, function(err, qres){
    if (err){
      if (typeof(callee) == 'function') {
        return callee(err);
      } else if (typeof(next) == 'function') {
        return next(err);
      } else {
        console.log('Uncaught DB error: ', err);
        console.log('Uncaught error in query: ', sql);
      }
    }

    row = (qres[0]) ? qres[0]: false ;

    try {
      if (typeof(callee) == 'function') {
        callee(err, row);
      } else if (typeof(next) == 'function') {
        next(err, row);
      }
    } catch(e) {
      next(e);
    }

  });

};

// last insert id
exports.lastId = function(next){

  conn.query("SELECT LAST_INSERT_ID() as id", function sres(err, qres){
    var id = (qres[0].id) ? qres[0].id: false ;

    try {
      next(err, id);
    } catch (e) {
      return next(e);
    }

  });
};

// calc found rows
exports.foundRows = function(next){
  conn.query("select found_rows() as cnt", function(err, qres){
    var cnt = (qres[0].cnt) ? qres[0].cnt : false ;

    try {
      next(err, cnt);
    } catch (e) {
      return next(e);
    }
  });
};
