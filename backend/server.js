const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const colors = require("colors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const connectDB = require("./config/db");
const blogRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server in running on port: http://localhost:${PORT}`.yellow);
});
