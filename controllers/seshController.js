const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
    db.Sesh
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};