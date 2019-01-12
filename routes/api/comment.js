const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  // .get(userController.findUser)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  // .put(userController.update)
  // .delete(userController.remove);

router.route("/login")
.post(userController.findUser)

module.exports = router;