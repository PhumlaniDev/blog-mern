import { setBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAddBlog = () => {
	const [titleData, setTitle] = useState({ title: "" });
	const [postData, setPost] = useState({ post: "" });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onTitleChange = (e) => {
		setTitle({
			...titleData.title,
			[e.target.name]: e.target.value,
		});
	};

	const onPostChange = (event, editor) => {
		const data = editor.getData();
		setPost({
			post: data,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			titleData,
			postData,
		};

		dispatch(setBlog(blogData));
		setTitle({ title: "" });
		setPost({ post: "" });

		navigate("/");
	};

	return { titleData, postData, onTitleChange, onPostChange, onSubmit };
};
