const { User, Thought } = require("../models");
module.exports = {
    async getAllThoughts(req, res) {
        const db = await Thought.find();
        res.json(db);
      },
      async createThought(req, res) {
        const db = await Thought.create(req.body);
        const dbUser = await User.findByIdAndUpdate(req.body.id,{$push:{thoughts: db._id}})
        res.json(db);
      },
      async getThought(req, res) {
        const db = await Thought.findById(req.params.id)

        res.json(db);
      },
      async updateThought(req, res) {
        const db = await Thought.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        res.json(db);
      },
      async deleteThought(req, res) {
        const db = await Thought.findByIdAndDelete(req.params.id, { new: true });
        res.json(db);
      }, 
      async addReaction(req, res) {
        const db = await Thought.findByIdAndUpdate(
          req.params.id,
          { $addToSet: { reactions: req.body} },
          { new: true }
        );
        res.json(db);
      },
      async deleteReaction(req, res) {
        const db = await Thought.findByIdAndUpdate(
            req.params.id,
            {$pull: {reactions: req.params.reactionId}},
            {new: true}
        );
        res.json(db);
      }
}
