import Spinner from "../components/Spinner";
import { useAddBlog } from "../hook/useAddBlog";
import { useSelector } from "react-redux";

const BlogForm = () => {
	const { title, post, onChange, onSubmit } = useAddBlog();

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
							value={title}
							onChange={onChange}
							placeholder="Title"
							required
						/>
					</div>
					<div className="form-group">
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

export default BlogForm;
