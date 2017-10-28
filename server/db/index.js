var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3000,
  password: '',
  database: 'chat'
});

connection.connect();

exports.connections;
//
// connection.query()
//  = mysql.connect(function(err){
//   if (err){
//     throw err;
//   }
//   console.log('CONNECTED!');
//
//   db.Connection.query('select * from messages', function (err, rows, fields){
//     console.log(rows[0].room);
//   });
// });
