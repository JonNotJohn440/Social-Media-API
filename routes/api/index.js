const router = require("express").Router();
const userRoutes = require("./user-routes.js")
const userThoughts = require("./thought-routes.js")
router.use("/user", userRoutes)
router.use("/thought", userThoughts)


module.exports = router;