import { setBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAddBlog = () => {
	const [formData, setFormData] = useState({
		title: "",
	});
	const [postData, setPostData] = useState({
		post: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData({
			...formData.title,
			[e.target.name]: e.target.value,
		});
		console.log(e);
	};

	const onPostChange = (prevState, e) => {
		const { id } = e.targe;
		setPostData({
			...prevState.id,
			[e.target]: id,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			title: formData.title,
			post: postData.post,
		};

		dispatch(setBlog(blogData));
		setFormData({});
		setPostData({
			post: postData.post,
		});
		navigate("/");
	};

	return { formData, postData, onChange, onPostChange, onSubmit };
};
