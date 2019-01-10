const router = require("express").Router();
const seshController = require("../../controllers/seshController");

// Matches with "/api/users"
router.route("/")
  // .get(userController.findUser)
  .post(seshController.create);

module.exports = router;