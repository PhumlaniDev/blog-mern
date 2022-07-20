const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const register = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name && !email && !password) {
		res.status(400);
		throw new Error("Please fill in the name, email address and password");
	}

	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error("User already exists");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name,
			email,
			hashedPassword,
			token: generateToken(user._id),
		});
	} else {
		res.status(400).json("Invalid Credentials");
	}
});

const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		res.status(400).json("Invalid email or password");
	}

	const comparePass = await bcrypt.compare(password, user.password);
	if (!comparePass) {
		res.status(400).json("Invalid email or password");
	}

	if (user && comparePass) {
		res.status(200).json({
			_id: user._id,
			email,
			comparePass,
			token: generateToken(user._id),
			message: "You have been successfully authenticated",
		});
	}
});

const getUser = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id);

	res.status(200).json({
		id: _id,
		name,
		email,
	});
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET, {
		expiresIn: "30d",
	});
};

module.exports = {
	register,
	login,
	getUser,
};
