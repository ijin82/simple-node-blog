[![Dependency Status](https://gemnasium.com/ijin82/simple-node-blog.png)](https://gemnasium.com/ijin82/simple-node-blog)
simple-node-blog
--
Simple blog based on node.js + express.js + jade + mysql

This is learninig example app for newbies in node, here we look at:
- work with <a href="https://npmjs.org/package/mysql">mysql</a>
- work with <a href="https://github.com/visionmedia/jade">jade</a>
- closer look at <a href="https://github.com/visionmedia/express">express</a>
- <a href="https://github.com/nlf/connect-mysql">Sessions</a> stored in mysql
- <a href="https://github.com/jaredhanson/passport">passport</a>
- <a href="http://getbootstrap.com/">Bootstrap</a> usage examples

Demo version
-- 
http://snb-demo.wired-mind.info/ - temporary unavailable :(

Included externals
--
- bootstrap v3.1.1
- jquery v2.1.0
- highlight.js 7.3
- Font Awesome 3.2.1


Install
--
1. mkdir folder_name
2. cd folder_name
3. git clone https://github.com/ijin82/simple-node-blog.git .
4. mysql -u root -p -- Create database db_name
5. mysql -u root -p db_name < sql/simple_node_blog.sql
6. vim config/dbConfig.js -- to correct your db access
7. npm install
8. node app.js 
9. for passport auth usage change access params at config/ folder

Debug
--
- <a href="https://npmjs.org/package/nodemon">nodemon</a>
- npm -g install nodemon
- nodemon app.js

Access params
--
admin:admin

Pasword is in users.pass field, a simple md5 hash so you can easily change it.

Language of interface
--
Only RU now..
But it's simple!

Planned
--
1. wysiwyg (ckeditor may be) + image library
2. Extend user profile (login, pass change, info)
3. Roles changing + editor area for authors
4. Social blog mode (seemed to be in far far glorious future)

