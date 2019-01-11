const db = require("../models");

// Defining methods for the resortsController
module.exports = {
  findAll: function (req, res) {
    db.Resort
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};