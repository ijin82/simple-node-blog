-- MySQL dump 10.13  Distrib 5.5.31, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: simple_node_blog
-- ------------------------------------------------------
-- Server version	5.5.31-0ubuntu0.13.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sessions` (
  `sid` varchar(255) NOT NULL,
  `expires` int(11) DEFAULT NULL,
  `json` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sid` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('3owbPELxA5B48XgrITmfacgM',1372019421,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',28,'2013-06-18 23:30:21','2013-06-18 23:30:21'),('84LyS9bEDbO-iX4pqz_DOR5J',1372019422,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',29,'2013-06-18 23:30:21','2013-06-18 23:30:21'),('BKbg5KNUgWoydhpkyyXQsVmA',1372019441,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',30,'2013-06-18 23:30:41','2013-06-18 23:30:41'),('mrGzF3wYH_-q4LRHfwD_RdxL',1372019448,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',31,'2013-06-18 23:30:48','2013-06-18 23:30:48'),('OLGCxMp9XA099A3opfdT5cjv',1372019456,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',32,'2013-06-18 23:30:56','2013-06-18 23:30:56'),('jvc5OYezQK-FtQxfYKcF298B',1372019467,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',33,'2013-06-18 23:31:07','2013-06-18 23:31:07'),('e4ZQAKzngcNzfDDM5cEShRv_',1372019470,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',34,'2013-06-18 23:31:09','2013-06-18 23:31:09'),('3L7L9_1nM3MnmsQVkRuFFCvr',1372019517,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',35,'2013-06-18 23:31:56','2013-06-18 23:31:56'),('PGP2goCpRIGawZ2dBEblmTat',1372019595,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',36,'2013-06-18 23:33:15','2013-06-18 23:33:15'),('zsQR_3hBHUtEoNdTeyBs_lIj',1372019609,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',37,'2013-06-18 23:33:29','2013-06-18 23:33:29'),('am09AJ9-OvOQhpz5G5zMP0d0',1372019742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',38,'2013-06-18 23:35:42','2013-06-18 23:35:42'),('bvIsdomgEosnWfjvjKko8VuD',1372019745,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',39,'2013-06-18 23:35:45','2013-06-18 23:35:45'),('AE3Z6n8uEcJkUZ5tCjk9StI0',1372019747,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',40,'2013-06-18 23:35:46','2013-06-18 23:35:46'),('UGA7HWe4lOEjadhwQ_c1Cg8b',1372019775,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',41,'2013-06-18 23:36:15','2013-06-18 23:36:15'),('ys7L6cc9FhcMDbxhfk4bsbEw',1372019794,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',42,'2013-06-18 23:36:33','2013-06-18 23:36:33'),('RvSz5ePhXfJuBmORztiMy83C',1372019797,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',43,'2013-06-18 23:36:36','2013-06-18 23:36:36'),('73XaeQ5-JTrBic2RHvMP-nZn',1372019812,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',44,'2013-06-18 23:36:52','2013-06-18 23:36:52'),('jeqw0PJtvPklzKU7BUnB4ziS',1372019836,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',45,'2013-06-18 23:37:16','2013-06-18 23:37:16'),('uPrsX_pkpenKbmKTNNxJxmqy',1372019902,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',46,'2013-06-18 23:38:22','2013-06-18 23:38:22'),('Jxq0up-tBUy5M4BIEPwoeZMb',1372019938,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',47,'2013-06-18 23:38:57','2013-06-18 23:38:57'),('NoTDM1rI7fo2_Dm3hBC4IJmH',1372019967,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',48,'2013-06-18 23:39:27','2013-06-18 23:39:27'),('k5vklfVo5U__yIFdhouoR1Om',1372019979,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',49,'2013-06-18 23:39:38','2013-06-18 23:39:38'),('M92-aM_zHEYszx5eMFs_TOxH',1372020052,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',50,'2013-06-18 23:40:52','2013-06-18 23:40:52'),('wTQvROpVLVPtb1dE9O67joHt',1372020108,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',51,'2013-06-18 23:41:47','2013-06-18 23:41:47'),('JHFaS3fWDWPrUx9lokCpwl_b',1372020110,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',52,'2013-06-18 23:41:49','2013-06-18 23:41:49'),('dWSdhU6VAsqgoyrkBUUglJAC',1372020272,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',53,'2013-06-18 23:44:32','2013-06-18 23:44:32'),('NumDjst51bAnOgDrc9B3tL0Y',1372020299,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',54,'2013-06-18 23:44:59','2013-06-18 23:44:59'),('qmXyv7YFa9FDSpq5BhEV5alD',1372020303,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"sys_auth\":0}',55,'2013-06-18 23:45:03','2013-06-18 23:45:03'),('rS-M5qisaPfoSrvkM1aUQekS',1372022035,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"user_id\":1,\"name\":\"admin name\",\"login\":\"admin\",\"pass\":\"21232f297a57a5a743894a0e4a801fc3\",\"role\":\"admin\",\"reg_date\":\"2013-03-21T22:11:14.000Z\",\"login_date\":\"2013-06-18T21:09:34.000Z\",\"facebook_id\":0,\"twitter_id\":0,\"github_id\":0}},\"sys_auth\":1,\"flash\":{},\"auth_type\":\"local\",\"userInfo\":{\"user_id\":1,\"name\":\"admin name\",\"login\":\"admin\",\"pass\":\"21232f297a57a5a743894a0e4a801fc3\",\"role\":\"admin\",\"reg_date\":\"2013-03-21T22:11:14.000Z\",\"login_date\":\"2013-06-18T21:09:34.000Z\",\"facebook_id\":0,\"twitter_id\":0,\"github_id\":0,\"auth\":1}}',59,'2013-06-19 00:09:40','2013-06-19 00:13:55');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `visible` tinyint(4) NOT NULL,
  `header` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `comments_cnt` int(11) DEFAULT '0',
  `post_date` datetime NOT NULL,
  PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,1,'Первая запись','Это первая запись в Simple node blog!',0,'2013-03-22 01:23:37'),(2,1,'Вторая запись','Это вторая запись без ценного содержимого!',0,'2013-03-22 01:30:27'),(3,1,'Тестовая версия','Тестовая версия восстанавливает свое состояние каждый час',0,'2013-03-26 08:31:22'),(4,1,'Приморского аптекаря заподозрили в краже 500 миллионов','Бывшего директора КГУП «Приморская краевая аптека» заподозрили в краже 500 миллионов рублей. Как сообщается во вторник, 26 марта, на сайте администрации Приморского края, об этом на встрече с журналистами рассказал губернатор региона Владимир Миклушевский.\r\n<br /><br />\r\nВ отношении чиновника возбуждено уголовное дело.\r\n<br /><br />\r\nPrimaMedia называет имя подозреваемого — Василий Сысойкин. Агентство также приводит слова Миклушевского о том, что бывший директор «Приморской краевой аптеки» покинул территорию края и будет объявлен в розыск. «Надо же, взял 500 миллионов и уехал отдыхать», - рассказал губернатор.\r\n<br /><br />\r\nПо данным PrimaMedia, в 2012 году «Приморская краевая аптека» выиграла аукцион по закупке дополнительных льготных лекарств по федеральной программе и осталась должна кредиторам 500 миллионов рублей. В ходе проверки выяснилось, что предприятие закупало дорогие препараты вместо более дешевых аналогов, а часть денег, выделенных на покупку медикаментов, и вовсе исчезла.',0,'2013-03-26 08:34:52'),(5,1,'Депутат дописал декларацию после претензий блогеров','Депутат Госдумы РФ от «Справедливой России» Алексей Чепа составил новую декларацию о доходах, в которую вписал данные, пропущенные в предыдущих декларациях. Об этом во вторник, 26 марта, пишет газета «Ведомости», которой депутат предоставил полную версию документа.\r\n<br /><br />\r\nВ новую декларацию Чепы попала квартира в Майами, США, площадью 342,8 квадратных метра, а также не упоминавшиеся ранее доли в компаниях и счета в российских и кипрских банках.\r\n<br /><br />\r\nО наличии у Чепы незадекларированной квартиры в Майами написал в феврале 2013 года журналист и блогер Андрей Мальгин. Согласно данным, опубликованным в блоге Мальгина, Чепа купил эту квартиру в марте 2010 года за 2,45 миллиона долларов, однако не указал ее в декларациях за последующие годы.\r\n<br /><br />\r\nСам депутат позднее объяснил, что не внес квартиру в декларацию, поскольку она куплена в кредит, который еще не погашен. «Пока кредит не погашен, она принадлежит банку», — пояснил свою позицию Чепа.\r\n<br /><br />\r\nПо словам члена комиссии Госдумы по контролю за достоверностью деклараций Эрнеста Валеева, слова которого приводят «Ведомости», за ошибки в декларациях законом не предусмотрено никакой ответственности.\r\n<br /><br />\r\nВ конце февраля «Известия» писали, что Алексей Чепа готовится сдать мандат. Это решение связывали с обнаружением у него незадекларированной собственности.',0,'2013-03-26 08:36:11'),(6,1,'Кэтрин Миддлтон признали самой красивой женщиной года','Журнал OK!, основное внимание уделяющий новостям из жизни всевозможных знаменитостей, подготовил номер, посвященный жене принца Уильяма герцогине Кембриджской Кэтрин Миддлтон. Издание признало 31-летнюю представительницу британской королевской семьи самой красивой женщиной года. Эксперты журнала отметили, что красота Кейт заключена не только в ее природном обаянии, но и в умении одеваться. Так, модные критики считают, что основной секрет внешнего вида герцогини кроется в том, как она мастерски подбирает наряды в соответствии с тем мероприятием, на которое отправляется. Едет в деловую поездку — предпочитает удобные, но при этом элегантные вещи, отправляется на премьеру — выбирает шикарные (но, как отметили критики, не слишком королевские — чтобы не ослеплять никого чрезмерностью и вычурностью) длинные летящие платья, собирается посетить благотворительную организацию — надевает простые и женственные костюмы. «Лента.ру» предлагает посмотреть на вещи, составляющие гардероб самой красивой женщины года',0,'2013-03-26 08:37:23'),(7,1,'Сорок миллионов тонн снега','После обильного снегопада, который начался в Киеве в пятницу и несколько стих только к утру воскресенья, столица Украины, по отзывам самих киевлян, превратилась в «блокадный город». Эти ассоциации усиливает и военная техника, введенная в Киев, чтобы помочь расчистке снега. Оба киевских аэропорта — Борисполь и Жуляны — по состоянию на вечер субботы не принимали и не отправляли рейсы, улицы города превратились в сплошные завалы снега, а по Андреевскому спуску молодежь начала кататься на сноубордах. В ночь с пятницы на субботу десятки людей ночевали в своих автомобилях, застрявших в сугробах, тысячи стояли в многокилометровых пробках. Президент Украины ввел в городе режим чрезвычайной ситуации, а метеорологи зафиксировали, что за сутки в столице выпало 50 сантиметров осадков при месячной норме 47 сантиметров. Это самый сильный снегопад в Киеве за последние сто лет.',0,'2013-03-26 08:38:21'),(8,1,'В Замбии арестовали бывшего президента','В Замбии был арестован бывший президент этой африканской страны Рупия Банда (Rupiah Banda), которого обвиняют в превышении служебных полномочий, что привело к растрате более 11 миллионов долларов бюджетных средств. Об этом 25 марта со ссылкой на власти страны сообщает Reuters.\r\n<br /><br />\r\nБанда был отпущен под залог. Во вторник, 26 марта, он должен будет предстать перед судом, передает Agence France-Presse.\r\n<br /><br />\r\nБывшему президенту были предъявлены обвинения в том, что он заключил невыгодный контракт на поставку сырой нефти из Нигерии, в результате чего страна потеряла 11 миллионов долларов.\r\n<br /><br />\r\nБанда настаивает на своей невиновности и уверяет, что она будет доказана в суде. Адвокат экс-президента утверждает, что обвинения против него являются политически мотивированными.\r\n<br /><br />\r\nРанее в марте парламент Замбии лишил Банду неприкосновенности. В правительстве нынешнего президента Майкла Саты (Michael Sata) заявляли, что Банда также причастен к коррупции, отмыванию денег и мошенничеству. Однако пока обвинения по соответствующим статьям ему предъявлены не были, пишет Zambia Reports.\r\n<br /><br />\r\nРупия Банда занимал пост четвертого президента Замбии с ноября 2008 года по сентябрь 2011 года. После него к власти пришел Сата, который начал несколько крупных антикоррупционных расследований в отношении представителей предыдущей администрации.',0,'2013-03-26 08:39:04'),(9,1,'Демонстрационная версия simple-node-blog','<span style=\"color:red;\">Тестовая версия возвращается в исходное состояние каждые 30 минут.</span>\r\n<br /><br />\r\nДоступ в панель управления: <strong>admin:admin</strong>\r\n<br /><br />',1,'2013-03-26 08:40:24');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_tags`
--

DROP TABLE IF EXISTS `blog_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_tags` (
  `blog_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  UNIQUE KEY `blog_id` (`blog_id`,`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_tags`
--

LOCK TABLES `blog_tags` WRITE;
/*!40000 ALTER TABLE `blog_tags` DISABLE KEYS */;
INSERT INTO `blog_tags` VALUES (1,54),(2,52),(2,53),(3,52),(4,56),(4,57),(5,52),(5,53),(5,56),(5,57),(7,52),(7,54),(7,58),(8,52),(8,56),(8,57),(9,52),(9,54),(182,52),(182,53),(182,54),(183,52);
/*!40000 ALTER TABLE `blog_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `pub_date` datetime DEFAULT NULL,
  `text` text,
  PRIMARY KEY (`comment_id`),
  KEY `by_post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (2,9,1,'2013-04-27 01:23:06','тестовый комментарий!');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` set('s_short','s_long','flag') DEFAULT NULL,
  `s_short` varchar(255) DEFAULT NULL,
  `s_long` text,
  `flag` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'blog_name','Название блога','s_short','simple node blog ',NULL,0),(2,'counter_code','Код невидимого счетчика','s_long',NULL,'',0),(3,'send_comment_notice','Отправлять оповещение о новых комментариях?','flag',NULL,NULL,0),(4,'comment_notice_email','e-mail для оповещения о новых комментариях','s_short','user@host.com',NULL,0);
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (52,'привет'),(53,'это тег'),(54,'первая запись!'),(56,'новости'),(57,'тест'),(58,'ого!');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `login` varchar(32) DEFAULT NULL,
  `pass` char(32) DEFAULT NULL,
  `role` set('admin','user','writer') DEFAULT NULL,
  `reg_date` datetime DEFAULT NULL,
  `login_date` datetime DEFAULT NULL,
  `facebook_id` bigint(20) DEFAULT '0',
  `twitter_id` bigint(20) DEFAULT '0',
  `github_id` bigint(20) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin name','admin','21232f297a57a5a743894a0e4a801fc3','admin','2013-03-22 01:11:14','2013-06-19 00:13:25',0,0,0),(6,'Ilya Rogojin',NULL,NULL,'user','2013-06-19 00:09:11','2013-06-19 00:09:11',100000918720100,0,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-06-19  0:14:05
