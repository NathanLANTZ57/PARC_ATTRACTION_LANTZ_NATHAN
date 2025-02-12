DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS avis;

CREATE TABLE avis (
    avis_id INT AUTO_INCREMENT PRIMARY KEY,
    attraction_id INT,
    texte TEXT NOT NULL,
    note INT CHECK (note BETWEEN 1 AND 5),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    anonyme BOOLEAN DEFAULT false,
    FOREIGN KEY (attraction_id) REFERENCES attraction(attraction_id) ON DELETE CASCADE
);
