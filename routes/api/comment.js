const router = require("express").Router();
const commentController = require("../../controllers/commentController");
console.log("hello from api")

// Matches with "/api/comment"
router.route("/release")
  .post(commentController.create);

router.route("/grab")
.post(commentController.grabComments);

module.exports = router;