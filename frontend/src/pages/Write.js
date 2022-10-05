import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import Spinner from "../components/Spinner";
import { setBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Write = () => {
	const [titleData, setTitle] = useState({ title: "" });
	const [postData, setPost] = useState({ post: "" });

	const { title } = titleData;
	const { post } = postData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onTitleChange = (e) => {
		setTitle({
			...title,
			[e.target.name]: e.target.value,
		});
	};

	const onPostChange = (event, editor) => {
		const data = editor.getData();
		setPost({
			post: data,
		});
	};

	console.log(postData.post);

	const onSubmit = (e) => {
		e.preventDefault();

		const blogData = {
			title,
			post,
		};

		dispatch(setBlog(blogData));
		setTitle({ title: "" });
		setPost({ post: "" });

		navigate("/");
	};
	const { isLoading } = useSelector((state) => state.blogs);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="container">
			<div className="row">
				<h3>Add</h3>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="text">
							Title <span className="required"> * </span>
						</label>
						<input
							type="text"
							name="title"
							className="form-control"
							onChange={onTitleChange}
							placeholder="Title"
							value={title}
							required
						/>
					</div>
					{/* Text area */}
					{/* <div className="form-group">
						<label htmlFor="text">
							Post <span className="required"> * </span>
						</label>
						<textarea
							name="post"
							cols="30"
							rows="10"
							value={post}
							onChange={onChange}
						></textarea>
					</div> */}
					<div className="form-group">
						<label htmlFor="text">
							Post <span className="required"> * </span>
						</label>
						<CKEditor
							editor={Editor}
							value={post}
							data={post}
							onChange={onPostChange}
						/>
					</div>
					<div className="form-group col-sm-12 text-right">
						<button type="submit" className="btn btn__theme">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Write;
