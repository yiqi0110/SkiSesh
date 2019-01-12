const router = require("express").Router();
const seshController = require("../../controllers/seshController");

// Matches with "/api/sesh"
router.route("/")
  .post(seshController.create);

router.route("/find")
.post(seshController.findSesh);
module.exports = router;