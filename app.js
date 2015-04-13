// local vars
var express = require('express')
    , app = express()
    , path = require('path')
    , flash = require('connect-flash')
    , colors = require('colors')
    , compress = require('compression')
    , favicon = require('serve-favicon')
    , morgan = require('morgan') // ex logger
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    ;

// global vars
    dbConfig = require("./config/dbConfig")
  , dbPool = require('./libs/db')
  , check = require('./libs/check')
  , dateformat = require('dateformat')
  , app_env = process.env.NODE_ENV || 'development';

dbPool.getConn(function(dbConn) {
  app.set('port', 3737);

  // main global db connect
  db = dbConn;

  // helpers
  require('./libs/helpers')(app);

    
  // gzip all
  app.use(compress());

  // error handler
  app.use(require('errorhandler')({ dumpExceptions: true, showStack: true }));

  // etc settings
  app.set('port', process.env.SIMPLE_NODE_BLOG_PORT || 3737);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(favicon(__dirname + '/public/favicon.ico'))
  app.use(morgan('short')); 
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // init session
  app.use(cookieParser('lalaleqwe123111keqwe123123ndfldsaknflsdfsdf'));

  // sessions mysql store
  var MysqlStore = require('connect-mysql')({session: session});
  app.use(session({
    secret: 'adhlbq erldhbq ;erb3241434134-~~~asd',
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore({
      config: {
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        table: 'sessions'
      }
    })
  }));

  //flash messages
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

  ////////////////////////////////////////
  // error 404 (just last available route)
  app.use(function(req, res, next){

    res.status(404).render('err404', { // error http code 404
      title: 'ouch.. 404 error',
      err_id: Math.floor((Math.random() * 12) + 1) // random 1 to 12
    });
  });

  if (app_env == 'development') {
    app.use(function(err, req, res, next) {

      res.status(500).render('err500', {
        title: 'ouch.. 500 [dev]',
        err: err
      });
    });
  }

  if (app_env == 'production') {
    app.use(function(err, req, res, next) {

      res.status(500).render('err500', {
        title: 'ouch.. 500',
        err: ''
      });
    });
  }

  // start server here
  app.listen(app.get('port'));
  console.log("-- simple node blog listening on port " + app.get('port') + " --");

});
