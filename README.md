simple-node-blog
--
Simple blog based on node.js + express.js + jade + mysql

This is learninig example app for newbies in node, here we look at:
- work with mysql
- work with jade
- look at express.js
- Sessions
- passport
- some bootstrap usage examples

Include current versions
--
- bootstrap v2.3.1
- jquery v1.9.1


Install
--
1. mkdir folder_name
2. cd folder_name
3. git clone https://github.com/ijin82/simple-node-blog.git .
4. mysql -u root -p -- Create database for blog
5. mysql -u root -p db_name < sql/simple_node_blog.sql
6. vim libs/db_config.js -- to correct your db access
7. npm install
8. node app.js -- let's run
9. for passport auth usage change access params at config/ folder

Access params
--
admin:admin

Pasword is in users.pass field, a simple md5 hash so you can easy change it.

Language of interface
--
Only RU now..
But it's simple!

Planned
--
1. User personal info correction (profile)
2. Social connections merge on the current user account (from profile)
3. Multi-authors? or smth like this.

