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
  create: function (req, res) {
    console.log(req.body)
    db.Sesh
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};