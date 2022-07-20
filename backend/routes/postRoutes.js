const express = require("express");
const router = express.Router();
const {
	getPosts,
	setPost,
	updatePost,
	deletePost,
} = require("../controllers/postController");
const { protect } = require("../middleware/auth");

router.route("/").get(getPosts);
router.route("/write").post(protect, setPost);
router.route("/:id").put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
