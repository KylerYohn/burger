CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
    )