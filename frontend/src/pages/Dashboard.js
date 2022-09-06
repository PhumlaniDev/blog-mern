import { getBlog, reset } from "../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

import Blog from "../components/Blog";
import Profile from "../components/Profile/Profile";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

const Dashboard = () => {
	const dispatch = useDispatch();

	const { blogs, isError, isLoading, message } = useSelector(
		(state) => state.blogs
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getBlog());

		return () => {
			dispatch(reset());
		};
	}, [isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<main className="home">
			<article>
				{blogs.length > 0 ? (
					<div>
						{blogs.map((blog) => (
							<li key={blog._id}>
								<Blog blog={blog} />
							</li>
						))}
					</div>
				) : (
					<h3>You have no posts</h3>
				)}
			</article>
			<Profile />
		</main>
	);
};

export default Dashboard;
