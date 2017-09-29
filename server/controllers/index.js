var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete(function(err, results) {
          if (err) {
            console.log(err);
          } else {
            res.json(results);
          }
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findOrCreate({username: req.body([username])})
        .complete(function(err, user) {
          if (err) {
            console.log(err);
          } else {
            var params = {
              text: req.body[text],
              userid: user.id,
              roomname: req.body[roomname]
            };
            Message.create(params)
              .complete(function(err, results) {
                if (err) {
                  console.log(err);
                } else {
                  res.sendStatus(201);
                }
              });
          }
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results) {
          if (err) {
            console.log(err);
          } else {
            res.json(results);
          }
        });
    },
    post: function (req, res) {
      User.create({username: req.body([username])})
        .complete(function(err, results) {
          if (err) {
            console.log(err);
          } else {
            res.sendStatus(201);
          }
        });
    }
  }
};

