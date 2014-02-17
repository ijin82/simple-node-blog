// local vars
var express = require('express')
    , app = express()
    , http = require('http')
    , path = require('path')
    , flash = require('connect-flash')
    , colors = require('colors');

// global vars
    dbConfig = require("./config/dbConfig")
  , dbPool = require('./libs/db')
  , check = require('./libs/check')
  , dateformat = require('dateformat');

  dbPool.getConn(function(dbConn){

    // main global db connect
    db = dbConn;

// helpers
require('./libs/helpers')(app);

// main config area
app.configure(function(){
  
  // gzip all
  app.use(express.compress());

  // error handler
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

  // etc settings
  app.set('port', process.env.COCAINUM_PORT || 3737);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // init session
  app.use(express.cookieParser('lalaleqwe123111keqwe123123ndfldsaknflsdfsdf'));

  // sessions mysql store
  var MySQLSessionStore = require('connect-mysql-session')(express);
  app.use(express.session({
    store: new MySQLSessionStore(dbConfig.database, dbConfig.user, dbConfig.password, {
        defaultExpiration: 5*60*60*24*1000, // 5 days
        logging: false // log to console switch
    }),
    secret: 'adsfjah;f~~~afiuailfasilu123dfgliadgsfib 2348o134t8734t5rqwdekfanfw'}));
  app.use(flash());

  // static
  app.use(express.static(path.join(__dirname, 'public')));

  // passport init & conf have to be here
  require('./config/pass-conf')(app);
  require('./config/pass-keys')(app);
  require('./config/pass-facebook-conf')(app);
  require('./config/pass-twitter-conf')(app);
  require('./config/pass-github-conf')(app);
  require('./config/pass-local-conf')(app);

  // router
  app.use(app.router);

  // error 404 (just last available route)
  app.use(function(req, res, next){

    res.status(404).render('err404', { // error http code 404
      title: 'ouch.. 404 error',
      err_id: Math.floor((Math.random() * 12) + 1) // random 1 to 12
    });
  });

});

app.configure('development', function(){
  app.use(function(err, req, res, next) {

    res.status(500).render('err500', {
      title: 'ouch.. 500 [dev]',
      err: err
    });
  });
})

app.configure('production', function(){
  app.use(function(err, req, res, next) {

    res.status(500).render('err500', {
      title: 'ouch.. 500',
      err: ''
    });
  });
})

// load global app config
var settings = require('./routes/admin/settings');

// global config here
appConfig = {};
settings.getConf(function(err){
  if (err) throw err;
}); // loaded config

// auth module
require('./routes/auth-routes')(app, require('./routes/auth'));

// blog module
require('./routes/blog-routes')(app, require('./routes/blog'));

// admin BASE module (main routing check)
require('./routes/admin/admin-routes')(app, require('./routes/admin/admin'));
// admin users module
require('./routes/admin/users-routes')(app, require('./routes/admin/users'));
// admin settings module
require('./routes/admin/settings-routes')(app, settings);

// user zone
require('./routes/my-routes')(app, require('./routes/my'));

// sitemap
require('./routes/sitemap-routes')(app, require('./routes/sitemap'));

// rss
require('./routes/rss-routes')(app, require('./routes/rss'));

// start http server here
server = http.createServer(app).listen(app.get('port'), function(){
  console.log("-- simple node blog listening on port " + app.get('port') + " --");
});

});
