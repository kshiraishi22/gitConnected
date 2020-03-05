const router = require("express").Router();
const developerRoutes = require("./developers");
const employerRoutes = require("./employers");
const positionRoutes = require("./positions");

// Book routes
router.use("/developer", developerRoutes);
router.use("/employer", employerRoutes);
router.use("/position", positionRoutes);

module.exports = router;
