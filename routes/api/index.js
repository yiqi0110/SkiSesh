const router = require("express").Router();
const userRoutes = require("./users");
const seshRoutes = require("./sesh");
const resortRoutes = require("./resort");

// User routes
router.use("/users", userRoutes);
router.use("/sesh", seshRoutes);
router.use("/resorts", resortRoutes);

module.exports = router;
