var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    // what happens to req?
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) throw err;
        res.json(results);
      });
    },

    post: function (req, res) {
      let params = [req.body[text], req.body[username], req.body[roomname]];
      models.messages.post(params, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
    }
  },

  users: {
    // get user info
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) throw err;
        res.json(results);
      });
    },
    // store username
    post: function (req, res) {
      let params = [req.body[username]];
      models.messages.post(params, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
    }
  }
};
