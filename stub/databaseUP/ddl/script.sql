CREATE TABLE uds.`administration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_admins_organization` (`organization_id`),
  CONSTRAINT `fk_admins_organization` FOREIGN KEY (`organization_id`) REFERENCES uds.`organizations` (`id`)
);

CREATE TABLE uds.`areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_district` (`district_id`),
  CONSTRAINT `fk_district` FOREIGN KEY (`district_id`) REFERENCES uds.`districts` (`id`)
);


CREATE TABLE uds.`awards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place` int(11) DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_awards_organization` (`organization_id`),
  CONSTRAINT `fk_awards_organization` FOREIGN KEY (`organization_id`) REFERENCES uds.`organizations` (`id`)
);


CREATE TABLE uds.`club_photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `club_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_photos_club` (`club_id`),
  CONSTRAINT `fk_photos_club` FOREIGN KEY (`club_id`) REFERENCES uds.`clubs` (`id`)
);

CREATE TABLE uds.`clubs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_clubs_organization` (`organization_id`),
  CONSTRAINT `fk_clubs_organization` FOREIGN KEY (`organization_id`) REFERENCES uds.`organizations` (`id`)
);

CREATE TABLE uds.`districts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE uds.`organizations` (
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
  CONSTRAINT `fk_area` FOREIGN KEY (`area_id`) REFERENCES uds.`areas` (`id`)
);

CREATE TABLE uds.`section_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE uds.`sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_group` (`group_id`),
  KEY `fk_organization` (`organization_id`),
  CONSTRAINT `fk_group` FOREIGN KEY (`group_id`) REFERENCES `section_groups` (`id`),
  CONSTRAINT `fk_organization` FOREIGN KEY (`organization_id`) REFERENCES uds.`organizations` (`id`)
);


CREATE TABLE uds.`stuff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trainings` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `organization_id` int(11) DEFAULT NULL,
  `competense` enum('sport','creative') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_stuff_organization` (`organization_id`),
  CONSTRAINT `fk_stuff_organization` FOREIGN KEY (`organization_id`) REFERENCES uds.`organizations` (`id`)
);




