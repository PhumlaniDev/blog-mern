const asyncHandler = require("express-async-handler");
const Post = require("../models/postsModel");

const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find();
	res.status(200).json(posts);
});

const setPost = asyncHandler(async (req, res) => {
	const { title, post } = req.body;

	if (!title && !post) {
		res.status(400);
		throw new Error("Please write some text");
	}

	const blog = await Post.create({
		user: req.user.id,
		title: title,
		post: post,
	});

	res.status(200).json(blog);
});

const updatePost = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const blog = await Post.findById(id);

	if (!blog) {
		res.status(404);
		throw new Error("Blog post not found");
	}

	if (!req.user) {
		req.status(404);
		throw new Error("User not found");
	}

	if (blog.user.toString() !== req.user.id) {
		req.status(401);
		throw new Error("User not authorized");
	}

	const updatedBlog = await Post.findByIdAndUpdate(id, req.body);

	res.status(200).json(updatedBlog);
});

const deletePost = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const blog = await Post.findById(id);

	if (!blog) {
		res.status(404);
		throw new Error("Blog post not found");
	}

	if (!req.user) {
		req.status(404);
		throw new Error("User not found");
	}

	if (blog.user.toString() !== req.user.id) {
		req.status(401);
		throw new Error("User not authorized");
	}

	await blog.remove();

	res.status(200).json(`Deleted blog ${id}`);
});

module.exports = { getPosts, setPost, updatePost, deletePost };
