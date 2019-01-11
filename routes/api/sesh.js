const router = require("express").Router();
const seshController = require("../../controllers/seshController");

// Matches with "/api/sesh"
router.route("/")
  // .get(userController.findUser)
  .post(seshController.create);

module.exports = router;