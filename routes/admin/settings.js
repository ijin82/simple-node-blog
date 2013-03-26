exports.settingsList = function(req, res, next)
{
  db.q("SELECT * \
    FROM settings",
    function(err, qres){
      if (err) return next(err);

      res.render('admin/settings_list', {
        title: 'cocainum settings list',
        settings: qres
      });
  });
};

exports.editParamm = function(req, res, next)
{
  try{
    check(req.params.param_id).is(/^[0-9]+$/);
    param_id=req.params.param_id;
  }catch(e){
    param_id=0;
  }

  db.getRow("SELECT * \
    FROM settings \
    WHERE id=?",
    [
        param_id
    ], function(err, row){
      if (err) return next($err);

      if (!row) {
        return res.redirect('/');
      }

      res.render('admin/edit_param', {
        title: 'cocainum edit param',
        setParam: row
      });
    });
};

// load config proc
function loadConfig(next)
{
  db.q("SELECT * \
    FROM settings",
    function(err, qres){
      if (err) return next(err);

      // tmp
      var newAppConfig = {};

      for(i in qres){
        switch (qres[i].type)
        {
          case 's_short':
            newAppConfig[qres[i].key] = qres[i].s_short;
            break;

          case 's_long':
            newAppConfig[qres[i].key] = qres[i].s_long;
            break;

          case 'flag':
            newAppConfig[qres[i].key] = qres[i].flag;
            break;
        }
      }

      // set to global config fast switch
      appConfig = newAppConfig;

      console.log('-- app config loaded --');

      next(err);
    });
}

// load config values from DB
exports.getConf = function(next){

  loadConfig(function(err){
    next(err);
  });
};

// save settings parameter
exports.saveParamm = function(req, res, next)
{
  var toSaveVar = [],
      toSaveVal = [];

  try{
    check(req.body.id).is(/^[0-9]+$/);
    id=req.body.id;
  }catch(e){
    id=0;
  }

  // key
  var key = req.body.key;
  if (key.match(/^[a-z][a-z0-9_]+$/i)) {
    toSaveVar.push('`key`=?');
    toSaveVal.push(req.body.key);
  }

  // name
  toSaveVar.push('`name`=?');
  toSaveVal.push(req.body.name);

  // s_short
  if (typeof req.body.s_short != 'undefined'){
    toSaveVar.push('s_short=?');
    toSaveVal.push(req.body.s_short);
  }

  // s_long
  if (typeof req.body.s_long != 'undefined'){
    toSaveVar.push('s_long=?');
    toSaveVal.push(req.body.s_long);
  }

  // flag
  toSaveVar.push('flag=?');
  if (req.body.flag) {
    toSaveVal.push(1);
  } else {
    toSaveVal.push(0);
  }

  // add id
  toSaveVal.push(id);

  db.getRow("SELECT * \
    FROM settings \
    WHERE id=?",
    [
        id
    ], function(err, row){
      if (err) return next(err);

      if (!row) return res.redirect('/');

      db.q("UPDATE settings \
        SET " + toSaveVar.join(',') + " \
        WHERE id=?",
            toSaveVal,
            function(err){
              if (err) return next(err);

              loadConfig(function(err){
                if (err) return next(err);

                return res.redirect('back');
              });
            });
    });
};

// create new settings param
exports.addParamm = function(req, res, next)
{
  if (typeof req.body.type == 'undefined') {
    return res.redirect('/');
  }

  console.log(req.body.type);

  db.q("INSERT settings \
    SET `type`=?",
    [
      req.body.type
    ], function(err){
      if (err) return next(err);

      db.lastId(function(err, id){
        if (err) return next(err);

        return res.redirect('/adm/edit-param/' + id);
      });
    });
};

// delete settings param
exports.delParamm = function(req, res, next)
{
  try{
    check(req.params.id).is(/^[0-9]+$/);
    id=req.params.id;
  }catch(e){
    id=0;
  }

  db.getRow("SELECT * \
    FROM settings \
    WHERE id=?",
    [
      id
    ], function(err, row){
      if (err) return next(err);

      if (!row) return res.redirect('/');

      db.q("DELETE \
        FROM settings \
        WHERE id=?",
        [
          id
        ], function(err){
          if (err) return next(err);

          loadConfig(function(err){
            if (err) return next(err);

            return res.redirect('/adm/settings/');
          });
        });
    });
};
