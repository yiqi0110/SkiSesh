const db = require("../models");
const bcrypt = require('bcrypt');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res){
    db.User
    .findOne({username: req.body.username}, function (err, user){
        user.comparePassword(req.body.password, function(err, isMatch){
          if (err) throw err;
          console.log(req.body.password, isMatch);
        })
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
