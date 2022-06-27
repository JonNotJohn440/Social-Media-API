const router = require("express").Router();
const { getAllThoughts, createThought, getThought, deleteThought, updateThought, deleteReaction, addReaction } = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:id").get(getThought).delete(deleteThought).put(updateThought);

router.route("/:id/reactions/:reactionId").delete(deleteReaction);

router.route("/:id/reactions").post(addReaction);

module.exports = router;
