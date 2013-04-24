// local vars
var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path');

// global vars
  dbConfig = require("./config/dbConfig"),
  db = require('./libs/db'),
  check = require('validator').check,
  dateformat = require('dateformat');

// rus lang for dateformat
dateformat.i18n = {
  dayNames: [
    "Вск", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб",
    "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
  ],
  monthNames: [
    "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ]
};

// helpers
require('./libs/helpers')(app);

// main config area
app.configure(function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.set('port', 3737);
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
    store: new MySQLSessionStore(dbConfig.database, dbConfig.user, dbConfig.password, {
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

app.configure('development', function(){
  app.use(function(err, req, res, next) {

    res.status(500).render('err500', {
      title: 'ouch.. 500 error [dev]',
      err: err
    });
  });
})

app.configure('production', function(){
  app.use(function(err, req, res, next) {

    res.status(500).render('err500', {
      title: 'ouch.. 500 error',
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

// user module (have to be first loaded)
require('./routes/user-routes')(app, require('./routes/user'));

// blog module
require('./routes/blog-routes')(app, require('./routes/blog'));

// admin BASE module (main routing check)
require('./routes/admin/admin-routes')(app, require('./routes/admin/admin'));
// admin users module
require('./routes/admin/users-routes')(app, require('./routes/admin/users'));
// admin settings module
require('./routes/admin/settings-routes')(app, settings);

// start http server here
http.createServer(app).listen(app.get('port'), function(){
  console.log("-- simple node blog listening on port " + app.get('port') + " --");
});
