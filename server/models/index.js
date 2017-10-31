var db = require('../db');
var mysql = require('mysql');
var http = require('http');



module.exports = {
  messages: {
    // fetch all messages
    get: function (req, res) {
      var data = {
        'Data': ""
      };
      db.connection.query('select * from messages', (err, rows, fields) => {
        if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
        // console.log('Result: ', result);
      })
    }, // a function which produces all the messages
    // store a message
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // fetch all users
    get: function () {},
    // store a user
    post: function () {}
  }
};
