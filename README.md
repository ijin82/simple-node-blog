simple-node-blog
--
**REM:** Large upgrade in progress. Partly broken.

Simple blog based on node.js + express.js + pug (ex. jade) + mysql

This is learninig example app for newbies in node, here we look at:
- work with <a href="https://npmjs.org/package/mysql">mysql</a>
- work with <a href="https://pugjs.org/">pug (ex. jade)</a>
- closer look at <a href="https://github.com/expressjs/express">express</a>
- <a href="https://github.com/nlf/connect-mysql">Sessions</a> stored in mysql
- <a href="https://github.com/jaredhanson/passport">passport</a>
- <a href="http://getbootstrap.com/">Bootstrap</a> usage examples

Included externals (old version currently)
--
- bootstrap v3.1.1
- jquery v2.1.0
- highlight.js 7.3
- Font Awesome 3.2.1


Install
--
1. ```mkdir folder_name```
1. ```cd folder_name```
1. ```git clone https://github.com/ijin82/simple-node-blog.git .```
1. Create database db_name ```mysql -u root -p```
1. ```mysql -u root -p db_name < sql/simple_node_blog.sql```
1. ```cp .env.example .env```
1. Fix all config settings here ```vim .env``` 
1. ```npm install```
1. ```node app.js``` 

Debug
--
- <a href="https://npmjs.org/package/nodemon">nodemon</a>
- ```npm -g install nodemon```
- ```nodemon app.js```

Access params
--
***admin:admin***

Pasword is in users.pass field, a simple md5 hash so you can easily change it.

Language of interface
--
Only EN now..
Looking for multiple languages solution.

Planned
--
1. wysiwyg (ckeditor may be) + image library
2. Extend user profile (login, pass change, info)
3. Roles changing + editor area for authors
4. Social blog mode (seemed to be in far far glorious future)

