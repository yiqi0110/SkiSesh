const router = require("express").Router();
const userRoutes = require("./users");
const seshRoutes = require("./sesh")

// User routes
router.use("/users", userRoutes);
router.use("/sesh", seshRoutes);

module.exports = router;
