import { setBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAddBlog = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
	});

	const [image, setImage] = useState(null);

	const [postData, setPost] = useState({
		post: "",
	});

	const { title, description } = formData;

	const { post } = postData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const onPostChange = (event, editor) => {
		const data = editor.getData();
		setPost({
			post: data,
		});
	};

	console.log(post);

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			title,
			description,
			post,
		};

		if (image) {
			const data = new FormData();
			const filename = Date.now() + image.name;
			data.append("name", filename);
			data.append("image", image);
			blogData.photo = filename;
		}

		dispatch(setBlog(blogData));
		setFormData({
			title: "",
			description: "",
		});

		setImage("");
		setPost({ post: "" });

		navigate("/");
	};

	return {
		title,
		description,
		post,
		onChange,
		onImageChange,
		onPostChange,
		onSubmit,
	};
};
