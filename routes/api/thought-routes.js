const router = require("express").Router();
const {
  addThought,
  removeThought,
  updateThought,
  getAllThoughts,
  getThoughtById,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/:userId").post(addThought).get(getAllThoughts);

router
  .route("/:userId/:thoughtId")
  .put(addReaction)
  .delete(removeThought)
  .get(getThoughtById)
  .put(updateThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
