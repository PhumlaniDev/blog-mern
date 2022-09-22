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
				value={post}
				data={post}
				onChange={onPostChange}
			/>
		</div>
	);
};

export default RichTextEditor;
