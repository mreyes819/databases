var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // Fetch all messages
      var querymessages = 'SELECT messages.id, messages.txt, rooms.name, users.name \
                           FROM users \
                            LEFT OUTER JOIN messages ON messages.userID = users.id\
                            LEFT OUTER JOIN rooms ON rooms.id = messages.roomID \
                           ORDER BY users.name \
                           ';
      // var querymessages = 'SELECT messages.id, messages.txt, rooms.name, users.name \
      //                      FROM messages \
      //                       LEFT OUTER JOIN users ON users.id = messages.userID \
      //                       LEFT OUTER JOIN rooms ON rooms.id = messages.roomID \
      //                      ORDER BY users.name \
      //                      ';

      db.query(querymessages, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    },

    post: function (parameter, callback) { // Create a message
      var insertMessage = 'INSERT INTO messages (txt, userID, roomID) \
                           VALUES (\
                             ?, \
                             (SELECT id FROM users WHERE name = ? LIMIT 1), \
                             (SELECT id FROM rooms WHERE name = ? LIMIT 1)  \
                           );';
      db.query(insertUser, parameter, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    }
  },

  users: {
    get: function (callback) { // Fetch all users
      var queryUsers = 'SELECT * FROM users;';
      db.query(queryUsers, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    },

    post: function (parameter, callback) { // Create a user
      var insertUser = 'INSERT INTO users(name) VALUES (?);';
      db.query(insertUser, parameter, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    }
  }
};

