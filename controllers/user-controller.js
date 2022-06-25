const {User} = require("../models")

module.exports = {
    async getAllUsers(req, res) {
       const db = await  User.find()
       res.json(db)
    }
}