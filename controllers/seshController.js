const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findSesh: function (req, res) {
    console.log("req", req.body)
    db.Sesh
      .find({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        resort: req.body.resort
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSeshByDate: function (req, res) {
    db.Sesh
      .find({
        startDate: req.body.startDate,
        endDate: req.body.endDate
      })
  },
  findSeshByResort: function (req, res) {
    db.Sesh
      .find({
        resort: req.body.resort
      })
  },
  create: function (req, res) {
    console.log(req.body)
    db.Sesh
      .create(req.body)
      .then(function (dbSesh) {
        return db.User.findOneAndUpdate({ username: req.body.username }, { $push: { seshes: dbSesh._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};