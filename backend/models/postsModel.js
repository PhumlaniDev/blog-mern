const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		title: {
			type: String,
			required: [true, "Please enter a title"],
		},
		post: {
			type: String,
			required: [true, "Please write a blog"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
