const router = require("express").Router();
const userRoutes = require("./users");
const seshRoutes = require("./sesh");
const resortRoutes = require("./resort");
const commentRoutes = require("./comment");

// User routes
router.use("/users", userRoutes);
router.use("/sesh", seshRoutes);
router.use("/resorts", resortRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
