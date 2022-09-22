import axios from "axios";

const API_URL = "/api/blogs/";

const setBlog = async (blogData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL + "write", blogData, config);

	return response.data;
};

const getBlogs = async () => {
	const response = await axios.get(API_URL);

	return response.data;
};

const deleteBlog = async (blogId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.delete(API_URL + blogId, config);

	return response.data;
};

const blogService = {
	setBlog,
	getBlogs,
	deleteBlog,
};

export default blogService;
