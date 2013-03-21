// start express here
var express = require('express');
var app = express();

var MySQLSessionStore = require('connect-mysql-session')(express)
  , db_config = require('./libs/db_config')
  , blog = require('./routes/blog')
  , user = require('./routes/user')
  , admin = require('./routes/admin')
  , http = require('http')
  , path = require('path')
  , heplers = require('./libs/helpers')(app);

// global vars
db = require('./libs/db');
check = require('validator').check;
dateformat = require('dateformat');

// main config area
app.configure(function(){

  app.set('port', 3434);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname +'/public/favicon.ico'));
  app.use(express.logger('dev'));

  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // init session
  app.use(express.cookieParser());

  // sessions on redis, debug
  app.use(express.session({
    store: new MySQLSessionStore(db_config.name, db_config.user, db_config.pass, {
        defaultExpiration: 5*60*60*24*1000, // 5 days
        logging: false // log to console switch
    }),
    secret: '252523532badfj,bfjdbfgiwgertiwegtiwu34525435'}));

  // passport init & conf have to be here
  require('./config/pass-conf')(app);
  require('./config/pass-facebook-conf')(app);
  require('./config/pass-twitter-conf')(app);
  require('./config/pass-github-conf')(app);
  require('./config/pass-local-conf')(app);

  // error handler
  app.use(express.errorHandler());

  app.use(app.router);

  // static
  app.use(express.static(path.join(__dirname, 'public')));

  // error 404 MUST BE the Last
  app.use(function(req, res, next){
    res.status(404).render('err404', { // error http code 404
        url: req.url ,
        title: 'cocainum error',
        err_id: Math.floor((Math.random()*12)+1) // random 1 to 7
        });
  });
});

// load for all requests
app.all('*', user.loadUserInfo);
// for admin part check access
app.all('/adm/*', admin.access);

// routes
// main & blog main are the same
app.get('/', blog.tags_line, blog.blog_list);
app.get('/page/:page_id', blog.tags_line, blog.blog_list);

// page_id can be unset, marked with "?" after var name
app.get('/tag/:tag_id/:page_id?', blog.tags_line, blog.blog_list);

// single post page
app.get('/post/:post_id', blog.blog_post);

// full posts listing
app.get('/full-list', blog.blog_posts_list);

// add comment
app.post('/comment', blog.comment);

// del comment
app.get('/delcomment/:comment_id', blog.del_comment);

// auth form on site
app.get('/login', user.login_form);

// logout
app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('back');
});

// ADMIN * posts list
app.get('/adm/posts/:tag_id?', admin.postsList);
// ADMIN * tags list
app.get('/adm/tags', admin.tagsList);
// ADMIN * delete tag
app.get('/adm/del-tag/:tag_id', admin.delTag);
// ADMIN * edit post
app.get('/adm/edit-post/:post_id', admin.editPost);
// ADMIN * delete post
app.get('/adm/del-post/:post_id', admin.deletePost);
// ADMIN * save post
app.post('/adm/save-post/', admin.savePost);
// ADMIN * visible post
app.get('/adm/post-visible/:post_id', admin.visiblePost);
// ADMIN * new post
app.get('/adm/post-new', admin.newPost);
// ADMIN * change tag
app.get('/adm/change-tag/:postId/:tagOper/:tagId', admin.changeTag);
// ADMIN * add tag
app.post('/adm/add-tag', admin.addTag);

// start http server here
http.createServer(app).listen(app.get('port'), function(){

    // start note
    console.log(" -- simple node blog listening on port " + app.get('port') + " -- ");

});
