const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/userController");
const { protect } = require("../middleware/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(protect, getUser);

module.exports = router;
