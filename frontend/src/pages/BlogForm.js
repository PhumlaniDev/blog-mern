import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.css";

import Helper from "../helpers/helper";
import Spinner from "../components/Spinner";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";
import md from "markdown-it";
import { useAddBlog } from "../hook/useAddBlog";
import { useSelector } from "react-redux";

const BlogForm = (props) => {
	const { editorRef, language, markers } = Helper;

	const { formData, onChange, onSubmit, onPostChange } = useAddBlog();

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
							onChange={onChange}
							placeholder="Title"
							value={formData.title}
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
					<TextareaMarkdownEditor
						className="post"
						markers={markers}
						ref={editorRef}
						language={language}
						doParse={md.render}
						name="post"
						cols="30"
						rows="10"
						onChange={onPostChange}
					/>
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

export default BlogForm;
