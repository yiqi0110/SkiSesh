const router = require("express").Router();
const seshController = require("../../controllers/seshController");

// Matches with "/api/sesh"
router.route("/")
  .post(seshController.create);

router.route("/find")
.post(seshController.findSesh);

router.route("/findbydate")
.post(seshController.findSeshByDate);

router.route("/findbyresort")
.post(seshController.findSeshByResort);

router.route("/findSeshForProfile")
.post(seshController.findSeshForProfile);

module.exports = router;