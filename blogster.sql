DROP DATABASE IF EXISTS blogster_db;

CREATE DATABASE blogster_db;

USE blogster_db;

CREATE TABLE blogs(
    id INT AUTO_INCREMENT,
    blog VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)   
);


CREATE TABLE comments (
	id INT AUTO_INCREMENT,
    comment VARCHAR(255) NOT NULL,
    blog_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(blog_id) REFERENCES blogs(id)
);

