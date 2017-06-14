var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function(err, results) {
        // TODO: handle error
        res.json(results);
      });
    },
    post: function (req, res) { // a function which handles posting a message to the database
      var parameter = [ req.body[txt], req.body[username], req.body[roomname] ];
      models.messages.post(parameter, function(error, results){
        res.json(results)
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) { // a function which handles a get request for all users
      models.users.get(function(err, results) {
        // TODO: handle error
        res.json(results);
      });
    },
    post: function (req, res) {
      var parameter = [ req.body[username] ];
      models.messages.post(parameter, function(error, results){
        res.json(results)
      });
    }

  }
};

