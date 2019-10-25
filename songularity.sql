CREATE DATABASE IF NOT EXISTS `songularity_db`;

CREATE TABLE IF NOT EXISTS `audio` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255),
    `url` varchar(255),
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `audiovisual` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255),
    `thumbnail` varchar(255),
    `fk_audio_id` int(11) DEFAULT NULL,
    `fk_visual_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `visual` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255),
    `url` varchar(255),
    PRIMARY KEY (`id`)
);
