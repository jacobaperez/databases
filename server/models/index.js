var db = require('../db');
var mysql = require('mysql');
var http = require('http');



module.exports = {
  messages: {
    // fetch all messages
    get: function (callback) {
      let queryStr = "SELECT messages.id, messages.text, messages.roomname FROM messages left outer join users on (messages.user_id = user.id) order by messages.id desc";
      db.query(queryStr, (err, results) => {
        if (err) throw err;
        callback(results)
      });
    },

    // store a message
    post: function (params, callback) {
      let queryStr = 'INSERT INTO messages (user_id, text, roomname) VALUES (?,(select id from users where username = ? limit 1),?)';
      db.query(queryStr, params, (err, results) => {
        if (err) throw err;
        callback(results)
      });
    }
  },

  users: {
    // fetch all users
    get: function (callback) {
      let queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        if (err) throw err;
        callback(results);
      });
    },
    // store a user
    post: function (params, callback) {}
      let queryStr = 'INSERT INTO users (username) values (?)';
      db.query(queryStr, params, (err, results) => {
        if (err) throw err;
        callback(results);
      });
  }
};
