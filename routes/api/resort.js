const router = require("express").Router();
const resortController = require("../../controllers/resortController");

// Matches with "/api/resorts"
router.route("/")
  .get(resortController.findAll)

module.exports = router;