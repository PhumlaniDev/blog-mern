import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React from "react";

const RichTextEditor = ({ post, onPostChange }) => {
	return (
		<div className="form-group">
			<label htmlFor="text">
				Post <span className="required"> * </span>
			</label>
			<CKEditor
				editor={Editor}
				data={post}
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={onPostChange}
			/>
		</div>
	);
};

export default RichTextEditor;
