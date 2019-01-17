const db = require("../models");
var ObjectId = require('mongoose').Types.ObjectId; 

// Defining methods for the booksController
module.exports = {
  grabComments: function (req, res) {
    console.log("req", req.body)
    db.Comment
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("hello this is from the control room")
    console.log(req.body)
    db.Comment.create(req.body)
      .then(function(dbComment){
        console.log(dbComment);
        return db.Sesh.findOneAndUpdate({_id: ObjectId(req.body.sesh)}, {$push: {comments: {comment: dbComment.comment, username: dbComment.username}}}, {new: true});
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};