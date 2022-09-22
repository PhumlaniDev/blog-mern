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

	const onPostChange = (editor) => {
		const data = editor.getData();
		setPost(data);
	};

	console.log(postData.post);

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			title: titleData.title,
			post: postData.post,
		};

		dispatch(setBlog(blogData));
		setTitle({ title: "" });
		setPost({ post: "" });

		navigate("/");
	};

	return { titleData, postData, onTitleChange, onPostChange, onSubmit };
};
