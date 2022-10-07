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
			unique: true,
		},
		description: {
			type: String,
			required: [true, "Please enter a description"],
		},
		post: {
			type: String,
			required: [true, "Please write a blog"],
		},
		image: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
