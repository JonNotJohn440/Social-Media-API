const router = require('express').Router();
const {getAllUsers} = require("../../controllers/user-controller")


router.route("/").get(getAllUsers).post()








module.exports = router;