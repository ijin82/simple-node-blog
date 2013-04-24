simple-node-blog
--
Simple blog based on node.js + express.js + jade + mysql

This is learninig example app for newbies in node, here we look at:
- work with mysql
- work with jade
- closer look at express.js
- Sessions
- passport
- bootstrap usage examples

Demo version
-- 
http://demo.cocainum.info/

Included externals
--
- bootstrap v2.3.1
- jquery v2.0.0
- highlight.js 7.3
- Font Awesome 3.0


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

Access params
--
admin:admin

Pasword is in users.pass field, a simple md5 hash so you can change it easily.

Language of interface
--
Only RU now..
But it's simple!

Planned
--
1. User personal info correction (profile)
2. Social connections merge on the current user account (from profile)
3. Multi-authors? or smth like this.

