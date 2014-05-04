-- MySQL dump 10.13  Distrib 5.5.37, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: simple_node_blog
-- ------------------------------------------------------
-- Server version	5.5.37-0ubuntu0.13.10.1

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
INSERT INTO `blog` VALUES (1,1,'Первая запись','Это первая запись в Simple node blog!',0,'2013-03-22 01:23:37'),(2,1,'Вторая запись','Это вторая запись без ценного содержимого!',0,'2013-03-22 01:30:27'),(3,1,'Тестовая версия','Тестовая версия восстанавливает свое состояние каждый час',0,'2013-03-26 08:31:22'),(4,1,'Приморского аптекаря заподозрили в краже 500 миллионов','Бывшего директора КГУП «Приморская краевая аптека» заподозрили в краже 500 миллионов рублей. Как сообщается во вторник, 26 марта, на сайте администрации Приморского края, об этом на встрече с журналистами рассказал губернатор региона Владимир Миклушевский.\n\n<br /><br />\n\nВ отношении чиновника возбуждено уголовное дело.\n\n<br /><br />\n\nPrimaMedia называет имя подозреваемого — Василий Сысойкин. Агентство также приводит слова Миклушевского о том, что бывший директор «Приморской краевой аптеки» покинул территорию края и будет объявлен в розыск. «Надо же, взял 500 миллионов и уехал отдыхать», - рассказал губернатор.\n\n<br /><br />\n\nПо данным PrimaMedia, в 2012 году «Приморская краевая аптека» выиграла аукцион по закупке дополнительных льготных лекарств по федеральной программе и осталась должна кредиторам 500 миллионов рублей. В ходе проверки выяснилось, что предприятие закупало дорогие препараты вместо более дешевых аналогов, а часть денег, выделенных на покупку медикаментов, и вовсе исчезла.',0,'2013-03-26 08:34:52'),(5,1,'Депутат дописал декларацию после претензий блогеров','Депутат Госдумы РФ от «Справедливой России» Алексей Чепа составил новую декларацию о доходах, в которую вписал данные, пропущенные в предыдущих декларациях. Об этом во вторник, 26 марта, пишет газета «Ведомости», которой депутат предоставил полную версию документа.\r\n<br /><br />\r\nВ новую декларацию Чепы попала квартира в Майами, США, площадью 342,8 квадратных метра, а также не упоминавшиеся ранее доли в компаниях и счета в российских и кипрских банках.\r\n<br /><br />\r\nО наличии у Чепы незадекларированной квартиры в Майами написал в феврале 2013 года журналист и блогер Андрей Мальгин. Согласно данным, опубликованным в блоге Мальгина, Чепа купил эту квартиру в марте 2010 года за 2,45 миллиона долларов, однако не указал ее в декларациях за последующие годы.\r\n<br /><br />\r\nСам депутат позднее объяснил, что не внес квартиру в декларацию, поскольку она куплена в кредит, который еще не погашен. «Пока кредит не погашен, она принадлежит банку», — пояснил свою позицию Чепа.\r\n<br /><br />\r\nПо словам члена комиссии Госдумы по контролю за достоверностью деклараций Эрнеста Валеева, слова которого приводят «Ведомости», за ошибки в декларациях законом не предусмотрено никакой ответственности.\r\n<br /><br />\r\nВ конце февраля «Известия» писали, что Алексей Чепа готовится сдать мандат. Это решение связывали с обнаружением у него незадекларированной собственности.',0,'2013-03-26 08:36:11'),(6,1,'Кэтрин Миддлтон признали самой красивой женщиной года','Журнал OK!, основное внимание уделяющий новостям из жизни всевозможных знаменитостей, подготовил номер, посвященный жене принца Уильяма герцогине Кембриджской Кэтрин Миддлтон. Издание признало 31-летнюю представительницу британской королевской семьи самой красивой женщиной года. Эксперты журнала отметили, что красота Кейт заключена не только в ее природном обаянии, но и в умении одеваться. Так, модные критики считают, что основной секрет внешнего вида герцогини кроется в том, как она мастерски подбирает наряды в соответствии с тем мероприятием, на которое отправляется. Едет в деловую поездку — предпочитает удобные, но при этом элегантные вещи, отправляется на премьеру — выбирает шикарные (но, как отметили критики, не слишком королевские — чтобы не ослеплять никого чрезмерностью и вычурностью) длинные летящие платья, собирается посетить благотворительную организацию — надевает простые и женственные костюмы. «Лента.ру» предлагает посмотреть на вещи, составляющие гардероб самой красивой женщины года',0,'2013-03-26 08:37:23'),(7,1,'Сорок миллионов тонн снега','После обильного снегопада, который начался в Киеве в пятницу и несколько стих только к утру воскресенья, столица Украины, по отзывам самих киевлян, превратилась в «блокадный город». Эти ассоциации усиливает и военная техника, введенная в Киев, чтобы помочь расчистке снега. Оба киевских аэропорта — Борисполь и Жуляны — по состоянию на вечер субботы не принимали и не отправляли рейсы, улицы города превратились в сплошные завалы снега, а по Андреевскому спуску молодежь начала кататься на сноубордах. В ночь с пятницы на субботу десятки людей ночевали в своих автомобилях, застрявших в сугробах, тысячи стояли в многокилометровых пробках. Президент Украины ввел в городе режим чрезвычайной ситуации, а метеорологи зафиксировали, что за сутки в столице выпало 50 сантиметров осадков при месячной норме 47 сантиметров. Это самый сильный снегопад в Киеве за последние сто лет.',0,'2013-03-26 08:38:21'),(8,1,'В Замбии арестовали бывшего президента','В Замбии был арестован бывший президент этой африканской страны Рупия Банда (Rupiah Banda), которого обвиняют в превышении служебных полномочий, что привело к растрате более 11 миллионов долларов бюджетных средств. Об этом 25 марта со ссылкой на власти страны сообщает Reuters.\r\n<br /><br />\r\nБанда был отпущен под залог. Во вторник, 26 марта, он должен будет предстать перед судом, передает Agence France-Presse.\r\n<br /><br />\r\nБывшему президенту были предъявлены обвинения в том, что он заключил невыгодный контракт на поставку сырой нефти из Нигерии, в результате чего страна потеряла 11 миллионов долларов.\r\n<br /><br />\r\nБанда настаивает на своей невиновности и уверяет, что она будет доказана в суде. Адвокат экс-президента утверждает, что обвинения против него являются политически мотивированными.\r\n<br /><br />\r\nРанее в марте парламент Замбии лишил Банду неприкосновенности. В правительстве нынешнего президента Майкла Саты (Michael Sata) заявляли, что Банда также причастен к коррупции, отмыванию денег и мошенничеству. Однако пока обвинения по соответствующим статьям ему предъявлены не были, пишет Zambia Reports.\r\n<br /><br />\r\nРупия Банда занимал пост четвертого президента Замбии с ноября 2008 года по сентябрь 2011 года. После него к власти пришел Сата, который начал несколько крупных антикоррупционных расследований в отношении представителей предыдущей администрации.',0,'2013-03-26 08:39:04'),(9,1,'Тестовая версия simple-node-blog','Обновляется каждый час. Не пугайтесь.\r\n<br /><br />\r\nДоступ: <strong>admin:admin</strong>',0,'2013-03-26 08:40:24');
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
INSERT INTO `blog_tags` VALUES (1,54),(2,52),(2,53),(2,59),(3,52),(3,59),(4,56),(4,57),(5,52),(5,53),(5,56),(5,57),(7,52),(7,54),(7,58),(8,52),(8,56),(8,57),(9,52),(9,53),(9,54),(9,56),(9,57),(9,58),(182,52),(182,53),(182,54),(183,52);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `sid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `session` text COLLATE utf8_unicode_ci NOT NULL,
  `expires` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('lNI1GQKU2egan6cn1PMr3AQP','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":\"1141030230\",\"username\":\"boobooopower\",\"displayName\":\"boobooopower\",\"photos\":[{\"value\":\"https://pbs.twimg.com/profile_images/435232856751628289/w8eqq89M_normal.jpeg\"}],\"provider\":\"twitter\",\"_raw\":\"{\\\"id\\\":1141030230,\\\"id_str\\\":\\\"1141030230\\\",\\\"name\\\":\\\"boobooopower\\\",\\\"screen_name\\\":\\\"boobooopower\\\",\\\"location\\\":\\\"\\\",\\\"description\\\":\\\"\\\\u0432\\\\u043e\\\\u0438\\\\u0441\\\\u0442\\\\u0438\\\\u043d\\\\u0443 \\\\u0440\\\\u043e\\\\u0441\\\\u043a\\\\u043e\\\\u0448\\\\u044c! \\\\u044d\\\\u043a\\\\u0441\\\\u0435\\\\u043b\\\\u044c\\\\u0441\\\\u0438\\\\u043e! \\\\u0434\\\\u0438\\\\u0441\\\\u0442\\\\u0438\\\\u043d\\\\u043a\\\\u0438\\\\u0432\\\\u043d\\\\u043e\\\",\\\"url\\\":null,\\\"entities\\\":{\\\"description\\\":{\\\"urls\\\":[]}},\\\"protected\\\":false,\\\"followers_count\\\":8,\\\"friends_count\\\":71,\\\"listed_count\\\":0,\\\"created_at\\\":\\\"Sat Feb 02 00:06:15 +0000 2013\\\",\\\"favourites_count\\\":15,\\\"utc_offset\\\":10800,\\\"time_zone\\\":\\\"Baghdad\\\",\\\"geo_enabled\\\":false,\\\"verified\\\":false,\\\"statuses_count\\\":311,\\\"lang\\\":\\\"ru\\\",\\\"status\\\":{\\\"created_at\\\":\\\"Sat May 03 01:39:06 +0000 2014\\\",\\\"id\\\":462405958543896576,\\\"id_str\\\":\\\"462405958543896576\\\",\\\"text\\\":\\\"RT @PsykerO1477: \\\\u041c\\\\u044b \\\\u0440\\\\u0443\\\\u0441\\\\u0441\\\\u043a\\\\u0438\\\\u0435 - \\\\u043b\\\\u044e\\\\u0434\\\\u0438 \\\\u0441\\\\u043c\\\\u0438\\\\u0440\\\\u0435\\\\u043d\\\\u043d\\\\u044b\\\\u0435, \\\\u043c\\\\u043d\\\\u043e\\\\u0433\\\\u043e \\\\u043d\\\\u0435 \\\\u043f\\\\u0440\\\\u043e\\\\u0441\\\\u0438\\\\u043c, \\\\u043d\\\\u043e \\\\u0442\\\\u043e \\\\u0447\\\\u0442\\\\u043e \\\\u043f\\\\u0440\\\\u043e\\\\u0441\\\\u0438\\\\u043c - \\\\u043d\\\\u0430\\\\u0434\\\\u043e \\\\u0432\\\\u044b\\\\u043f\\\\u043e\\\\u043b\\\\u043d\\\\u044f\\\\u0442\\\\u044c \\\\u0432\\\\u0441\\\\u0435\\\\u043c. #\\\\u043d\\\\u0435 \\\\u043c\\\\u0435\\\\u0441\\\\u0442\\\\u044c, \\\\u043d\\\\u043e \\\\u0432\\\\u043e\\\\u0437\\\\u043c\\\\u0435\\\\u0437\\\\u0434\\\\u0438\\\\u0435 #\\\\u041f\\\\u043e\\\\u0440\\\\u0430!\\\",\\\"source\\\":\\\"web\\\",\\\"truncated\\\":false,\\\"in_reply_to_status_id\\\":null,\\\"in_reply_to_status_id_str\\\":null,\\\"in_reply_to_user_id\\\":null,\\\"in_reply_to_user_id_str\\\":null,\\\"in_reply_to_screen_name\\\":null,\\\"geo\\\":null,\\\"coordinates\\\":null,\\\"place\\\":null,\\\"contributors\\\":null,\\\"retweeted_status\\\":{\\\"created_at\\\":\\\"Fri May 02 19:55:47 +0000 2014\\\",\\\"id\\\":462319562986635264,\\\"id_str\\\":\\\"462319562986635264\\\",\\\"text\\\":\\\"\\\\u041c\\\\u044b \\\\u0440\\\\u0443\\\\u0441\\\\u0441\\\\u043a\\\\u0438\\\\u0435 - \\\\u043b\\\\u044e\\\\u0434\\\\u0438 \\\\u0441\\\\u043c\\\\u0438\\\\u0440\\\\u0435\\\\u043d\\\\u043d\\\\u044b\\\\u0435, \\\\u043c\\\\u043d\\\\u043e\\\\u0433\\\\u043e \\\\u043d\\\\u0435 \\\\u043f\\\\u0440\\\\u043e\\\\u0441\\\\u0438\\\\u043c, \\\\u043d\\\\u043e \\\\u0442\\\\u043e \\\\u0447\\\\u0442\\\\u043e \\\\u043f\\\\u0440\\\\u043e\\\\u0441\\\\u0438\\\\u043c - \\\\u043d\\\\u0430\\\\u0434\\\\u043e \\\\u0432\\\\u044b\\\\u043f\\\\u043e\\\\u043b\\\\u043d\\\\u044f\\\\u0442\\\\u044c \\\\u0432\\\\u0441\\\\u0435\\\\u043c. #\\\\u043d\\\\u0435 \\\\u043c\\\\u0435\\\\u0441\\\\u0442\\\\u044c, \\\\u043d\\\\u043e \\\\u0432\\\\u043e\\\\u0437\\\\u043c\\\\u0435\\\\u0437\\\\u0434\\\\u0438\\\\u0435 #\\\\u041f\\\\u043e\\\\u0440\\\\u0430!\\\",\\\"source\\\":\\\"\\\\u003ca href=\\\\\\\"http:\\\\/\\\\/www.handmark.com\\\\\\\" rel=\\\\\\\"nofollow\\\\\\\"\\\\u003eTweetCaster for iOS\\\\u003c\\\\/a\\\\u003e\\\",\\\"truncated\\\":false,\\\"in_reply_to_status_id\\\":null,\\\"in_reply_to_status_id_str\\\":null,\\\"in_reply_to_user_id\\\":null,\\\"in_reply_to_user_id_str\\\":null,\\\"in_reply_to_screen_name\\\":null,\\\"geo\\\":null,\\\"coordinates\\\":null,\\\"place\\\":null,\\\"contributors\\\":null,\\\"retweet_count\\\":412,\\\"favorite_count\\\":96,\\\"entities\\\":{\\\"hashtags\\\":[{\\\"text\\\":\\\"\\\\u043d\\\\u0435\\\",\\\"indices\\\":[86,89]},{\\\"text\\\":\\\"\\\\u041f\\\\u043e\\\\u0440\\\\u0430\\\",\\\"indices\\\":[110,115]}],\\\"symbols\\\":[],\\\"urls\\\":[],\\\"user_mentions\\\":[]},\\\"favorited\\\":false,\\\"retweeted\\\":true,\\\"lang\\\":\\\"ru\\\"},\\\"retweet_count\\\":412,\\\"favorite_count\\\":0,\\\"entities\\\":{\\\"hashtags\\\":[{\\\"text\\\":\\\"\\\\u043d\\\\u0435\\\",\\\"indices\\\":[103,106]},{\\\"text\\\":\\\"\\\\u041f\\\\u043e\\\\u0440\\\\u0430\\\",\\\"indices\\\":[127,132]}],\\\"symbols\\\":[],\\\"urls\\\":[],\\\"user_mentions\\\":[{\\\"screen_name\\\":\\\"PsykerO1477\\\",\\\"name\\\":\\\"\\\\u0418\\\\u0432\\\\u0430\\\\u043d \\\\u041e\\\\u0445\\\\u043b\\\\u043e\\\\u0431\\\\u044b\\\\u0441\\\\u0442\\\\u0438\\\\u043d\\\",\\\"id\\\":224254489,\\\"id_str\\\":\\\"224254489\\\",\\\"indices\\\":[3,15]}]},\\\"favorited\\\":false,\\\"retweeted\\\":true,\\\"lang\\\":\\\"ru\\\"},\\\"contributors_enabled\\\":false,\\\"is_translator\\\":false,\\\"is_translation_enabled\\\":false,\\\"profile_background_color\\\":\\\"FFFFFF\\\",\\\"profile_background_image_url\\\":\\\"http:\\\\/\\\\/pbs.twimg.com\\\\/profile_background_images\\\\/378800000152492325\\\\/YePGzyfC.png\\\",\\\"profile_background_image_url_https\\\":\\\"https:\\\\/\\\\/pbs.twimg.com\\\\/profile_background_images\\\\/378800000152492325\\\\/YePGzyfC.png\\\",\\\"profile_background_tile\\\":false,\\\"profile_image_url\\\":\\\"http:\\\\/\\\\/pbs.twimg.com\\\\/profile_images\\\\/435232856751628289\\\\/w8eqq89M_normal.jpeg\\\",\\\"profile_image_url_https\\\":\\\"https:\\\\/\\\\/pbs.twimg.com\\\\/profile_images\\\\/435232856751628289\\\\/w8eqq89M_normal.jpeg\\\",\\\"profile_banner_url\\\":\\\"https:\\\\/\\\\/pbs.twimg.com\\\\/profile_banners\\\\/1141030230\\\\/1398416062\\\",\\\"profile_link_color\\\":\\\"088253\\\",\\\"profile_sidebar_border_color\\\":\\\"FFFFFF\\\",\\\"profile_sidebar_fill_color\\\":\\\"222224\\\",\\\"profile_text_color\\\":\\\"A69045\\\",\\\"profile_use_background_image\\\":false,\\\"default_profile\\\":false,\\\"default_profile_image\\\":false,\\\"following\\\":false,\\\"follow_request_sent\\\":false,\\\"notifications\\\":false,\\\"suspended\\\":false,\\\"needs_phone_verification\\\":false}\",\"_json\":{\"id\":1141030230,\"id_str\":\"1141030230\",\"name\":\"boobooopower\",\"screen_name\":\"boobooopower\",\"location\":\"\",\"description\":\"воистину роскошь! эксельсио! дистинкивно\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":8,\"friends_count\":71,\"listed_count\":0,\"created_at\":\"Sat Feb 02 00:06:15 +0000 2013\",\"favourites_count\":15,\"utc_offset\":10800,\"time_zone\":\"Baghdad\",\"geo_enabled\":false,\"verified\":false,\"statuses_count\":311,\"lang\":\"ru\",\"status\":{\"created_at\":\"Sat May 03 01:39:06 +0000 2014\",\"id\":462405958543896600,\"id_str\":\"462405958543896576\",\"text\":\"RT @PsykerO1477: Мы русские - люди смиренные, много не просим, но то что просим - надо выполнять всем. #не месть, но возмездие #Пора!\",\"source\":\"web\",\"truncated\":false,\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"retweeted_status\":{\"created_at\":\"Fri May 02 19:55:47 +0000 2014\",\"id\":462319562986635260,\"id_str\":\"462319562986635264\",\"text\":\"Мы русские - люди смиренные, много не просим, но то что просим - надо выполнять всем. #не месть, но возмездие #Пора!\",\"source\":\"<a href=\\\"http://www.handmark.com\\\" rel=\\\"nofollow\\\">TweetCaster for iOS</a>\",\"truncated\":false,\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"retweet_count\":412,\"favorite_count\":96,\"entities\":{\"hashtags\":[{\"text\":\"не\",\"indices\":[86,89]},{\"text\":\"Пора\",\"indices\":[110,115]}],\"symbols\":[],\"urls\":[],\"user_mentions\":[]},\"favorited\":false,\"retweeted\":true,\"lang\":\"ru\"},\"retweet_count\":412,\"favorite_count\":0,\"entities\":{\"hashtags\":[{\"text\":\"не\",\"indices\":[103,106]},{\"text\":\"Пора\",\"indices\":[127,132]}],\"symbols\":[],\"urls\":[],\"user_mentions\":[{\"screen_name\":\"PsykerO1477\",\"name\":\"Иван Охлобыстин\",\"id\":224254489,\"id_str\":\"224254489\",\"indices\":[3,15]}]},\"favorited\":false,\"retweeted\":true,\"lang\":\"ru\"},\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"FFFFFF\",\"profile_background_image_url\":\"http://pbs.twimg.com/profile_background_images/378800000152492325/YePGzyfC.png\",\"profile_background_image_url_https\":\"https://pbs.twimg.com/profile_background_images/378800000152492325/YePGzyfC.png\",\"profile_background_tile\":false,\"profile_image_url\":\"http://pbs.twimg.com/profile_images/435232856751628289/w8eqq89M_normal.jpeg\",\"profile_image_url_https\":\"https://pbs.twimg.com/profile_images/435232856751628289/w8eqq89M_normal.jpeg\",\"profile_banner_url\":\"https://pbs.twimg.com/profile_banners/1141030230/1398416062\",\"profile_link_color\":\"088253\",\"profile_sidebar_border_color\":\"FFFFFF\",\"profile_sidebar_fill_color\":\"222224\",\"profile_text_color\":\"A69045\",\"profile_use_background_image\":false,\"default_profile\":false,\"default_profile_image\":false,\"following\":false,\"follow_request_sent\":false,\"notifications\":false,\"suspended\":false,\"needs_phone_verification\":false}}},\"sys_auth\":1,\"flash\":{},\"auth_type\":\"twitter\",\"userInfo\":{\"user_id\":5,\"name\":\"boobooopower\",\"login\":null,\"pass\":null,\"role\":\"user\",\"reg_date\":\"2014-05-04T22:01:06.000Z\",\"login_date\":\"2014-05-04T22:01:06.000Z\",\"facebook_id\":0,\"twitter_id\":1141030230,\"github_id\":0,\"auth\":1}}',0),('ZXCvNp6gRnMjHHJO4vKBiqPU','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":\"100000918720100\",\"username\":\"irogojin\",\"displayName\":\"Ilya Rogojin\",\"name\":{\"familyName\":\"Rogojin\",\"givenName\":\"Ilya\"},\"gender\":\"male\",\"profileUrl\":\"https://www.facebook.com/irogojin\",\"provider\":\"facebook\",\"_raw\":\"{\\\"id\\\":\\\"100000918720100\\\",\\\"education\\\":[{\\\"school\\\":{\\\"id\\\":\\\"150408971771515\\\",\\\"name\\\":\\\"\\\\u0428\\\\u043a\\\\u043e\\\\u043b\\\\u0430 33\\\"},\\\"type\\\":\\\"High School\\\"},{\\\"school\\\":{\\\"id\\\":\\\"376119275783934\\\",\\\"name\\\":\\\"\\\\u041c\\\\u0418\\\\u0423\\\"},\\\"type\\\":\\\"College\\\",\\\"year\\\":{\\\"id\\\":\\\"113125125403208\\\",\\\"name\\\":\\\"2004\\\"}}],\\\"favorite_athletes\\\":[{\\\"id\\\":\\\"166353781946\\\",\\\"name\\\":\\\"Randy \\\\\\\"The Natural\\\\\\\" Couture\\\"},{\\\"id\\\":\\\"217311848336651\\\",\\\"name\\\":\\\"Yulia Lipnitskaya\\\"},{\\\"id\\\":\\\"221374471207929\\\",\\\"name\\\":\\\"Alexei Nemov\\\"},{\\\"id\\\":\\\"120299494655283\\\",\\\"name\\\":\\\"The Frank Mir\\\"},{\\\"id\\\":\\\"107611182595014\\\",\\\"name\\\":\\\"Mickey Rourke\\\"},{\\\"id\\\":\\\"201263389915962\\\",\\\"name\\\":\\\"Lev Yashin\\\"},{\\\"id\\\":\\\"271107599751\\\",\\\"name\\\":\\\"Pat \\\\\\\"HD\\\\\\\" Barry - Official Fan Page\\\"},{\\\"id\\\":\\\"29756652821\\\",\\\"name\\\":\\\"Muhammad Ali\\\"},{\\\"id\\\":\\\"32839808231\\\",\\\"name\\\":\\\"Rich Franklin\\\"},{\\\"id\\\":\\\"316153475562\\\",\\\"name\\\":\\\"Herb Dean (UFC)\\\"},{\\\"id\\\":\\\"49627733420\\\",\\\"name\\\":\\\"Urijah Faber\\\"},{\\\"id\\\":\\\"168497319876346\\\",\\\"name\\\":\\\"Anton Shipulin\\\"},{\\\"id\\\":\\\"117965031586601\\\",\\\"name\\\":\\\"Quinton \\\\\\\"Rampage\\\\\\\" Jackson\\\"},{\\\"id\\\":\\\"193429717368770\\\",\\\"name\\\":\\\"Mike Tyson\\\"},{\\\"id\\\":\\\"201044609938875\\\",\\\"name\\\":\\\"Adelina Sotnikova\\\"},{\\\"id\\\":\\\"173575669367704\\\",\\\"name\\\":\\\"Valeri Kharlamov\\\"},{\\\"id\\\":\\\"235600639916252\\\",\\\"name\\\":\\\"Yulia Lipnitskaya\\\"},{\\\"id\\\":\\\"332430596806868\\\",\\\"name\\\":\\\"Alexander Karelin\\\"},{\\\"id\\\":\\\"318530424891034\\\",\\\"name\\\":\\\"Chael Sonnen\\\"}],\\\"first_name\\\":\\\"Ilya\\\",\\\"gender\\\":\\\"male\\\",\\\"hometown\\\":{\\\"id\\\":\\\"191696070852991\\\",\\\"name\\\":\\\"Petrozavodsk\\\"},\\\"languages\\\":[{\\\"id\\\":\\\"112624162082677\\\",\\\"name\\\":\\\"Russian\\\"},{\\\"id\\\":\\\"146989945372699\\\",\\\"name\\\":\\\"English\\\"}],\\\"last_name\\\":\\\"Rogojin\\\",\\\"link\\\":\\\"https:\\\\/\\\\/www.facebook.com\\\\/irogojin\\\",\\\"location\\\":{\\\"id\\\":\\\"109471685749742\\\",\\\"name\\\":\\\"Kaliningrad\\\"},\\\"locale\\\":\\\"ru_RU\\\",\\\"name\\\":\\\"Ilya Rogojin\\\",\\\"sports\\\":[{\\\"id\\\":\\\"191975837494920\\\",\\\"from\\\":{\\\"id\\\":\\\"100000791401952\\\",\\\"name\\\":\\\"Max Stepanov\\\"},\\\"name\\\":\\\"\\\\u0421\\\\u0430\\\\u043c\\\\u043e\\\\u043e\\\\u0431\\\\u043e\\\\u0440\\\\u043e\\\\u043d\\\\u0430 100 \\\\u0025\\\",\\\"with\\\":[{\\\"id\\\":\\\"100000791401952\\\",\\\"name\\\":\\\"Max Stepanov\\\"}]}],\\\"quotes\\\":\\\"\\\\u0425\\\\u043e\\\\u0440\\\\u043e\\\\u0448\\\\u0438\\\\u0435 \\\\u043c\\\\u0430\\\\u043d\\\\u0435\\\\u0440\\\\u044b - \\\\u043d\\\\u0430 \\\\u0434\\\\u043e\\\\u043b\\\\u0433\\\\u0443\\\\u044e \\\\u043f\\\\u0430\\\\u043c\\\\u044f\\\\u0442\\\\u044c, \\\\u043f\\\\u043b\\\\u043e\\\\u0445\\\\u0438\\\\u0435 \\\\u043c\\\\u0430\\\\u043d\\\\u0435\\\\u0440\\\\u044b - \\\\u043a \\\\u043e\\\\u0434\\\\u0438\\\\u043d\\\\u043e\\\\u0447\\\\u0435\\\\u0441\\\\u0442\\\\u0432\\\\u0443.\\\",\\\"timezone\\\":3,\\\"updated_time\\\":\\\"2014-02-17T01:54:27+0000\\\",\\\"username\\\":\\\"irogojin\\\",\\\"verified\\\":true,\\\"work\\\":[{\\\"employer\\\":{\\\"id\\\":\\\"737901689556360\\\",\\\"name\\\":\\\"\\\\u0418\\\\u043d\\\\u0442\\\\u0435\\\\u0440\\\\u043f\\\\u0440\\\\u043e\\\\u0433\\\\u043c\\\\u0430\\\"},\\\"location\\\":{\\\"id\\\":\\\"115085015172389\\\",\\\"name\\\":\\\"Moscow, Russia\\\"},\\\"position\\\":{\\\"id\\\":\\\"111971125481473\\\",\\\"name\\\":\\\"Programmer\\\"},\\\"start_date\\\":\\\"2013-12-31\\\"},{\\\"end_date\\\":\\\"2012-08-01\\\",\\\"employer\\\":{\\\"id\\\":\\\"11616446006\\\",\\\"name\\\":\\\"Mail.Ru Group\\\"},\\\"location\\\":{\\\"id\\\":\\\"115085015172389\\\",\\\"name\\\":\\\"Moscow, Russia\\\"},\\\"position\\\":{\\\"id\\\":\\\"111971125481473\\\",\\\"name\\\":\\\"Programmer\\\"},\\\"start_date\\\":\\\"2010-11-01\\\"},{\\\"end_date\\\":\\\"2010-01-01\\\",\\\"employer\\\":{\\\"id\\\":\\\"366198146842707\\\",\\\"name\\\":\\\"\\\\u041e\\\\u0431\\\\u044a\\\\u0435\\\\u0434\\\\u0438\\\\u043d\\\\u0435\\\\u043d\\\\u043d\\\\u0430\\\\u044f \\\\u043a\\\\u043e\\\\u043c\\\\u043f\\\\u0430\\\\u043d\\\\u0438\\\\u044f \\\\u0410\\\\u0444\\\\u0438\\\\u0448\\\\u0430\\\\u2014\\\\u0420\\\\u0430\\\\u043c\\\\u0431\\\\u043b\\\\u0435\\\\u0440\\\"},\\\"position\\\":{\\\"id\\\":\\\"111971125481473\\\",\\\"name\\\":\\\"Programmer\\\"},\\\"start_date\\\":\\\"2008-01-01\\\"},{\\\"end_date\\\":\\\"2008-01-01\\\",\\\"employer\\\":{\\\"id\\\":\\\"188737397975469\\\",\\\"name\\\":\\\"Playfon\\\"},\\\"position\\\":{\\\"id\\\":\\\"111971125481473\\\",\\\"name\\\":\\\"Programmer\\\"},\\\"start_date\\\":\\\"2005-01-01\\\"}]}\",\"_json\":{\"id\":\"100000918720100\",\"education\":[{\"school\":{\"id\":\"150408971771515\",\"name\":\"Школа 33\"},\"type\":\"High School\"},{\"school\":{\"id\":\"376119275783934\",\"name\":\"МИУ\"},\"type\":\"College\",\"year\":{\"id\":\"113125125403208\",\"name\":\"2004\"}}],\"favorite_athletes\":[{\"id\":\"166353781946\",\"name\":\"Randy \\\"The Natural\\\" Couture\"},{\"id\":\"217311848336651\",\"name\":\"Yulia Lipnitskaya\"},{\"id\":\"221374471207929\",\"name\":\"Alexei Nemov\"},{\"id\":\"120299494655283\",\"name\":\"The Frank Mir\"},{\"id\":\"107611182595014\",\"name\":\"Mickey Rourke\"},{\"id\":\"201263389915962\",\"name\":\"Lev Yashin\"},{\"id\":\"271107599751\",\"name\":\"Pat \\\"HD\\\" Barry - Official Fan Page\"},{\"id\":\"29756652821\",\"name\":\"Muhammad Ali\"},{\"id\":\"32839808231\",\"name\":\"Rich Franklin\"},{\"id\":\"316153475562\",\"name\":\"Herb Dean (UFC)\"},{\"id\":\"49627733420\",\"name\":\"Urijah Faber\"},{\"id\":\"168497319876346\",\"name\":\"Anton Shipulin\"},{\"id\":\"117965031586601\",\"name\":\"Quinton \\\"Rampage\\\" Jackson\"},{\"id\":\"193429717368770\",\"name\":\"Mike Tyson\"},{\"id\":\"201044609938875\",\"name\":\"Adelina Sotnikova\"},{\"id\":\"173575669367704\",\"name\":\"Valeri Kharlamov\"},{\"id\":\"235600639916252\",\"name\":\"Yulia Lipnitskaya\"},{\"id\":\"332430596806868\",\"name\":\"Alexander Karelin\"},{\"id\":\"318530424891034\",\"name\":\"Chael Sonnen\"}],\"first_name\":\"Ilya\",\"gender\":\"male\",\"hometown\":{\"id\":\"191696070852991\",\"name\":\"Petrozavodsk\"},\"languages\":[{\"id\":\"112624162082677\",\"name\":\"Russian\"},{\"id\":\"146989945372699\",\"name\":\"English\"}],\"last_name\":\"Rogojin\",\"link\":\"https://www.facebook.com/irogojin\",\"location\":{\"id\":\"109471685749742\",\"name\":\"Kaliningrad\"},\"locale\":\"ru_RU\",\"name\":\"Ilya Rogojin\",\"sports\":[{\"id\":\"191975837494920\",\"from\":{\"id\":\"100000791401952\",\"name\":\"Max Stepanov\"},\"name\":\"Самооборона 100 %\",\"with\":[{\"id\":\"100000791401952\",\"name\":\"Max Stepanov\"}]}],\"quotes\":\"Хорошие манеры - на долгую память, плохие манеры - к одиночеству.\",\"timezone\":3,\"updated_time\":\"2014-02-17T01:54:27+0000\",\"username\":\"irogojin\",\"verified\":true,\"work\":[{\"employer\":{\"id\":\"737901689556360\",\"name\":\"Интерпрогма\"},\"location\":{\"id\":\"115085015172389\",\"name\":\"Moscow, Russia\"},\"position\":{\"id\":\"111971125481473\",\"name\":\"Programmer\"},\"start_date\":\"2013-12-31\"},{\"end_date\":\"2012-08-01\",\"employer\":{\"id\":\"11616446006\",\"name\":\"Mail.Ru Group\"},\"location\":{\"id\":\"115085015172389\",\"name\":\"Moscow, Russia\"},\"position\":{\"id\":\"111971125481473\",\"name\":\"Programmer\"},\"start_date\":\"2010-11-01\"},{\"end_date\":\"2010-01-01\",\"employer\":{\"id\":\"366198146842707\",\"name\":\"Объединенная компания Афиша—Рамблер\"},\"position\":{\"id\":\"111971125481473\",\"name\":\"Programmer\"},\"start_date\":\"2008-01-01\"},{\"end_date\":\"2008-01-01\",\"employer\":{\"id\":\"188737397975469\",\"name\":\"Playfon\"},\"position\":{\"id\":\"111971125481473\",\"name\":\"Programmer\"},\"start_date\":\"2005-01-01\"}]}}},\"sys_auth\":1,\"flash\":{},\"auth_type\":\"facebook\",\"userInfo\":{\"user_id\":2,\"name\":\"Ilya Rogojin\",\"login\":null,\"pass\":null,\"role\":\"user\",\"reg_date\":\"2013-04-28T21:01:29.000Z\",\"login_date\":\"2013-04-28T21:01:29.000Z\",\"facebook_id\":100000918720100,\"twitter_id\":0,\"github_id\":0,\"auth\":1}}',0);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
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
INSERT INTO `settings` VALUES (1,'blog_name','Название блога','s_short','simple node blog',NULL,0),(2,'counter_code','Код невидимого счетчика','s_long',NULL,'',0),(3,'send_comment_notice','Отправлять оповещение о новых комментариях?','flag',NULL,NULL,0),(4,'comment_notice_email','e-mail для оповещения о новых комментариях','s_short','user@host.com',NULL,0);
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
  `exclude` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (52,'привет',0),(53,'это тег',0),(54,'первая запись!',0),(56,'новости',0),(57,'тест',0),(58,'ого!',0),(59,'исключенный',1);
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
  `role` set('admin','user') DEFAULT NULL,
  `reg_date` datetime DEFAULT NULL,
  `login_date` datetime DEFAULT NULL,
  `facebook_id` bigint(20) DEFAULT '0',
  `twitter_id` bigint(20) DEFAULT '0',
  `github_id` bigint(20) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','21232f297a57a5a743894a0e4a801fc3','admin','2013-03-22 01:11:14','2013-08-16 00:55:59',0,0,0);
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

-- Dump completed on 2014-05-05  1:08:19
