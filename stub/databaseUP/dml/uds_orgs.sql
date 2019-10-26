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


LOCK TABLES `administration` WRITE;
/*!40000 ALTER TABLE `administration` DISABLE KEYS */;

INSERT INTO `administration` (`id`, `name`, `jobTitle`, `photo`, `organization_id`)
VALUES
	(1,'Саидова Наталья Павловна','Заместитель директора','orion/zam1.png',1),
	(2,'Данилова Татьяна Васильевна','Методист','orion/zam2.png',1);

/*!40000 ALTER TABLE `administration` ENABLE KEYS */;
UNLOCK TABLES;

#----------------------------------------
LOCK TABLES `stuff` WRITE;
/*!40000 ALTER TABLE `stuff` DISABLE KEYS */;

INSERT INTO `stuff` (`id`, `name`, `jobTitle`, `photo`, `jobDescription`, `organization_id`)
VALUES
	(1,'Харлан Наталья Владимировна','Заместитель директора','orion/1.png','Занимается программированием программ',1),
	(2,'Родионова Александра Сергеевна','Методист','orion/2.png','Занимается менеджингом программ, программируемых программирующими программистами',1),
	(3,'Арбузкин Денис Александрович','Занятия: Айкидо для детей 9 – 17 лет, Самозащита 18+','orion/3.jpg','Инструктор Федерации Айкидо России . 1-й дан по Айкидо Акикай. 1-й дан по Шотокан Каратэ до. Мастер спорта по Самбо.',1);


/*!40000 ALTER TABLE `stuff` ENABLE KEYS */;
UNLOCK TABLES;


# Дамп таблицы areas
# ------------------------------------------------------------


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



# Дамп таблицы club_photos
# ------------------------------------------------------------

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

LOCK TABLES `organizations` WRITE;
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;

INSERT INTO `organizations` (`id`, `url`, `short_name`, `name`, `area_id`, `short_description`, `about`, `logo`, `video`, `address`, `schedule_url`)
VALUES
	(1,'orion','ГБУ \"Орион\"','ГБУ ЦСД \"Орион\"',1,'ГБУ \"Орион\" уже несколько лет работает в Академическом районе. Это многопрофильный центр, который ведёт досуговую, социально-воспитательную и спортивную работу с населением всех возврастов. На базе 7 отделений центра круглогодично работают 24 спортивные секции и 25 творческих мастерских.','Государственное бюджетное учреждение Центр «Орион» является многопрофильным Центром, который ведёт досуговую, социально-воспитательную и спортивную работу с населением по месту жительства в Академическом районе ЮЗАО. Основными критериями работы учреждения являются шаговая доступность, многопрофильность, отсутствие ограничений по возрасту, круглогодичность работы.','orion/orion.jpg',NULL,'г. Москва, ЮЗАО, ул. Вавилова, д. 17','https://uds-moscow.ru/static/shedule/orion-schedule.pdf');

/*!40000 ALTER TABLE `organizations` ENABLE KEYS */;
UNLOCK TABLES;


# Дамп таблицы section_groups
# ------------------------------------------------------------

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



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
