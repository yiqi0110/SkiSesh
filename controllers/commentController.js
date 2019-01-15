const db = require("../models");

// Defining methods for the booksController
module.exports = {
  grabComments: function (req, res) {
    console.log("req", req.body)
    db.Comments
      .find({
        username: req.body.username,
        // sesh: req.body.sesh,
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("hello this is from the control room")
    console.log(req.body)
    db.Comments
      .create(req.body)
      // .then(function(dbComment){
      //   return db.User.findOneAndUpdate({username: req.body.username}, {$push: {comment: dbComment._id}}, {new: true});
      // })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};