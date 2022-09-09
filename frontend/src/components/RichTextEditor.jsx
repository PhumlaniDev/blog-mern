import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React from "react";

const RichTextEditor = ({ post, onPostChange }) => {
	return (
		<div>
			<h2>Using CKEditor 5 from online builder in React</h2>
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
