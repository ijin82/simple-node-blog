// local vars
var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path');

// global vars
db_config = require('./config/db_config')
  , db = require('./libs/db')
  , check = require('validator').check
  , dateformat = require('dateformat');

// helpers
require('./libs/helpers')(app);

// main config area
app.configure(function(){

  app.set('port', 3434);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // init session
  app.use(express.cookieParser('lalalekndfldsaknflsdfsdf'));

  // sessions mysql store
  var MySQLSessionStore = require('connect-mysql-session')(express);
  app.use(express.session({
    store: new MySQLSessionStore(db_config.name, db_config.user, db_config.pass, {
        defaultExpiration: 5*60*60*24*1000, // 5 days
        logging: false // log to console switch
    }),
    secret: 'adsfjah;f~~~afiuailfasiludfgliadgsfib 2348o134t8734t5rqwdekfanfw'}));

  // passport init & conf have to be here
  require('./config/pass-conf')(app);
  require('./config/pass-facebook-conf')(app);
  require('./config/pass-twitter-conf')(app);
  require('./config/pass-github-conf')(app);
  require('./config/pass-local-conf')(app);

  // router
  app.use(app.router);

  // static
  app.use(express.static(path.join(__dirname, 'public')));

  // error 404 (just last available route)
  app.use(function(req, res, next){
    res.status(404).render('err404', { // error http code 404
      title: 'ouch.. 404 error',
      err_id: Math.floor((Math.random() * 12) + 1) // random 1 to 12
    });
  });

});

// handing 500 error

app.configure('development', function(){
  // error 500
  app.use(function(err, req, res, next) {
    res.status(500).render('err500', {
      title: 'ouch.. 500 error',
      err: err
    });
  });
});

app.configure('production', function(){
  // error 500
  app.use(function(err, req, res, next) {
    res.status(500).render('err500', {
      title: 'ouch.. 500 error',
      err: ''
    });
  });
});

// user module
require('./routes/user-routes')(app, require('./routes/user'));
// blog module
require('./routes/blog-routes')(app, require('./routes/blog'));
// admin module
require('./routes/admin-routes')(app, require('./routes/admin'));

// start http server here
http.createServer(app).listen(app.get('port'), function(){
    console.log(" -- simple node blog listening on port " + app.get('port') + " -- ");
});
