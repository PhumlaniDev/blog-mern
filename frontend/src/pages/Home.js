import { getBlog, reset } from "../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import Posts from "../components/Posts";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

const Home = () => {
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
			{blogs.length > 0 ? (
				<Posts>
					{blogs.map((item) => (
						<Post key={item._id} title={item.title} />
					))}
				</Posts>
			) : (
				<h3>You have no posts</h3>
			)}
			{/* <Profile /> */}
		</main>
	);
};

export default Home;
