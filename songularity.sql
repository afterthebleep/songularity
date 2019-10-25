CREATE DATABASE IF NOT EXISTS `songularity_db`;

USE songularity_db;

CREATE TABLE IF NOT EXISTS `audiovisual` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255),
    `thumbnail` varchar(255),
    `youtube_id` varchar(11) DEFAULT NULL,
    `shadertoy_id` varchar(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
