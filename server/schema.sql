DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  message TEXT NOT NULL,
  username CHAR(20),
  roomname CHAR(30)

  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */
-- CREATE TABLE room (
--   id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   roomname CHAR(30),
--   username CHAR(20)
-- );
--
-- CREATE TABLE users (
--   username
--
-- )
-- CREATE TABLE
-- CREATE TABLE friendslist(
--   id INTEGER PRIMARY KEY
-- );
--


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
