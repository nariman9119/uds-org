# ************************************************************
# Sequel Pro SQL dump
# Версия 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.7.27)
# Схема: uds-db
# Время создания: 2019-09-27 23:15:37 +0000
# ************************************************************


 /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


 # Дамп таблицы administration
# ------------------------------------------------------------

 CREATE TABLE `administration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_admins_organization` (`organization_id`),
  CONSTRAINT `fk_admins_organization` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `administration` WRITE;
/*!40000 ALTER TABLE `administration` DISABLE KEYS */;

 INSERT INTO `administration` (`id`, `name`, `position`, `photo`, `organization_id`)
VALUES
	(1,'Саидова Наталья Павловна','Заместитель директора','orion/zam1.png',1),
	(2,'Данилова Татьяна Васильевна','Методист','orion/zam2.png',1);

 /*!40000 ALTER TABLE `administration` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы areas
# ------------------------------------------------------------

 CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_district` (`district_id`),
  CONSTRAINT `fk_district` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;

 INSERT INTO `areas` (`id`, `name`, `district_id`)
VALUES
	(1,'Академический',2),
	(2,'Бутово Северное',2),
	(3,'Бутово Южное',2),
	(4,'Гагаринский',2),
	(5,'Зюзино',2),
	(6,'Коньково',2),
	(7,'Котловка',2),
	(11,'Ломоносовский',2),
	(12,'Обручевский',2),
	(13,'Тёплый стан',2),
	(14,'Черёмушки',2),
	(15,'Ясенево',2);

 /*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы awards
# ------------------------------------------------------------

 CREATE TABLE `awards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place` int(11) DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_awards_organization` (`organization_id`),
  CONSTRAINT `fk_awards_organization` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



 # Дамп таблицы club_photos
# ------------------------------------------------------------

 CREATE TABLE `club_photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `club_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_photos_club` (`club_id`),
  CONSTRAINT `fk_photos_club` FOREIGN KEY (`club_id`) REFERENCES `clubs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `club_photos` WRITE;
/*!40000 ALTER TABLE `club_photos` DISABLE KEYS */;

 INSERT INTO `club_photos` (`id`, `photo`, `club_id`)
VALUES
	(1,'orion/vavilova7_1.jpg',1),
	(2,'orion/vavilova7_2.jpg',1),
	(3,'orion/vavilova7_3.jpg',1),
	(4,'orion/kedrova5k1_1.jpg',2),
	(5,'orion/kedrova5k1_2.jpg',2),
	(6,'orion/profsoyuznaya11_1.jpg',3),
	(7,'orion/profsoyuznaya11_2.jpg',3),
	(8,'orion/profsoyuznaya11_3.jpg',3);

 /*!40000 ALTER TABLE `club_photos` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы clubs
# ------------------------------------------------------------

 CREATE TABLE `clubs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_clubs_organization` (`organization_id`),
  CONSTRAINT `fk_clubs_organization` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;

 INSERT INTO `clubs` (`id`, `address`, `organization_id`)
VALUES
	(1,'ул. Вавилова, д. 7',1),
	(2,'ул. Кедрова, д.5 корп. 1',1),
	(3,'ул. Профсоюзная д. 11 / 11',NULL);

 /*!40000 ALTER TABLE `clubs` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы districts
# ------------------------------------------------------------

 CREATE TABLE `districts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `districts` WRITE;
/*!40000 ALTER TABLE `districts` DISABLE KEYS */;

 INSERT INTO `districts` (`id`, `name`)
VALUES
	(1,'ЦАО'),
	(2,'ЮЗАО'),
	(3,'СВАО'),
	(4,'ВАО'),
	(5,'ЮВАО'),
	(6,'САО');

 /*!40000 ALTER TABLE `districts` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы organizations
# ------------------------------------------------------------

 CREATE TABLE `organizations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `about` text COLLATE utf8mb4_unicode_ci,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schedule_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_area` (`area_id`),
  CONSTRAINT `fk_area` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `organizations` WRITE;
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;

 INSERT INTO `organizations` (`id`, `url`, `short_name`, `name`, `area_id`, `short_description`, `about`, `logo`, `video`, `address`, `schedule_url`)
VALUES
	(1,'orion','ГБУ \"Орион\"','ГБУ ЦСД \"Орион\"',1,'ГБУ \"Орион\" уже несколько лет работает в Академическом районе. Это многопрофильный центр, который ведёт досуговую, социально-воспитательную и спортивную работу с населением всех возврастов. На базе 7 отделений центра круглогодично работают 24 спортивные секции и 25 творческих мастерских.','Государственное бюджетное учреждение Центр «Орион» является многопрофильным Центром, который ведёт досуговую, социально-воспитательную и спортивную работу с населением по месту жительства в Академическом районе ЮЗАО. Основными критериями работы учреждения являются шаговая доступность, многопрофильность, отсутствие ограничений по возрасту, круглогодичность работы.','orion/orion.jpg',NULL,'г. Москва, ЮЗАО, ул. Вавилова, д. 17','https://uds-moscow.ru/static/shedule/orion-schedule.pdf');

 /*!40000 ALTER TABLE `organizations` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы section_groups
# ------------------------------------------------------------

 CREATE TABLE `section_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `section_groups` WRITE;
/*!40000 ALTER TABLE `section_groups` DISABLE KEYS */;

 INSERT INTO `section_groups` (`id`, `name`)
VALUES
	(1,'2-6 лет'),
	(2,'7-11 лет'),
	(3,'12-17 лет'),
	(4,'18 лет и старше');

 /*!40000 ALTER TABLE `section_groups` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы sections
# ------------------------------------------------------------

 CREATE TABLE `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_group` (`group_id`),
  KEY `fk_organization` (`organization_id`),
  CONSTRAINT `fk_group` FOREIGN KEY (`group_id`) REFERENCES `section_groups` (`id`),
  CONSTRAINT `fk_organization` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;

 INSERT INTO `sections` (`id`, `name`, `group_id`, `organization_id`)
VALUES
	(1,'ОФП для дошкольного возраста',1,1),
	(2,'Танцевальная студия \"Гелиос\"',1,1),
	(3,'Самбо',1,1),
	(4,'Хоккей/флорбол',2,1);

 /*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;


 # Дамп таблицы stuff
# ------------------------------------------------------------

 CREATE TABLE `stuff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trainings` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `organization_id` int(11) DEFAULT NULL,
  `competense` enum('sport','creative') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_stuff_organization` (`organization_id`),
  CONSTRAINT `fk_stuff_organization` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;