import { setBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const useAddBlog = () => {
	const [formData, setFormData] = useState({
		title: "",
		post: "",
	});

	const { title, post } = formData;

	const dispatch = useDispatch();

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// const onPostChange = (value) => {
	// 	setFormData({
	// 		...formData.post,
	// 		post: value,
	// 	});

	// 	console.log(value);
	// };

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			title,
			post,
		};

		dispatch(setBlog(blogData));
	};

	return { title, post, onChange, onSubmit };
};
