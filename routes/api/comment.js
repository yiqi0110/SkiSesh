const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/comment"
router.route("/release")
  .post(commentController.create);
  console.log("helllo froom the api/comment")

router.route("/grab")
.post(commentController.grabComments);

module.exports = router;