import Post from "../components/Post";

const Home = () => {
	// const truncate = (str, len) => {
	// 	if (str.length > len) {
	// 		if (len <= 10) {
	// 			return str.slice(0, len - 10) + "...";
	// 		} else {
	// 			return "...";
	// 		}
	// 	} else {
	// 		return str;
	// 	}
	// };

	return (
		<main className="home">
			<Post />
		</main>
	);
};

export default Home;
