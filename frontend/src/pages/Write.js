import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import Spinner from "../components/Spinner";
import { useAddBlog } from "../hook/useAddBlog";
import { useSelector } from "react-redux";

const Write = () => {
	const {
		title,
		description,
		post,
		onChange,
		onPostChange,
		onImageChange,
		onSubmit,
	} = useAddBlog();

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
							value={title}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="text">
							Description <span className="required"> * </span>
						</label>
						<input
							type="text"
							name="description"
							className="form-control"
							onChange={onChange}
							placeholder="Title"
							value={description}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="text">
							Image <span className="required"> * </span>
						</label>
						<input type="file" accept="image/*" onChange={onImageChange} />
					</div>

					<div className="form-group">
						<label htmlFor="text">
							Post <span className="required"> * </span>
						</label>
						<div className="editorContainer">
							<CKEditor
								editor={Editor}
								value={post}
								data={post}
								onChange={onPostChange}
							/>
						</div>
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
