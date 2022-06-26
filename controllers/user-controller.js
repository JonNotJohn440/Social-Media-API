const { User } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    const db = await User.find();
    res.json(db);
  },
  async createUser(req, res) {
    const db = await User.create(req.body, { new: true });
    res.json(db);
  },
  async getUser(req, res) {
    const db = await User.findById(req.params.id, { new: true })
      .populate("thoughts")
      .populate("friends");
    res.json(db);
  },
  async updateUser(req, res) {
    const db = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(db);
  },
  async deleteUser(req, res) {
    const db = await User.findByIdAndDelete(req.params.id, { new: true });
    res.json(db);
  },
  async addFriend(req, res) {
    const db = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(db);
  },
  async deleteFriend(req, res) {
    const db = await User.findByIdAndUpdate(
        req.params.id,
        {$pull: {friends: req.params.friendId}},
        {new: true}
    );
    res.json(db);
  }
};
