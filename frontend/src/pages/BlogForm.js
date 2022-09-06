import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.css";

import { Icon } from "semantic-ui-react";
import Spinner from "../components/Spinner";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";
import md from "markdown-it";
import { useAddBlog } from "../hook/useAddBlog";
import { useRef } from "react";
import { useSelector } from "react-redux";

const BlogForm = (props) => {
	const editorRef = useRef(null);
	const markers = [
		{
			key: "header",
			markers: [
				{
					key: "header",
					markers: [
						{
							key: "h1",
							marker: "# ",
							name: <b>H1</b>,
							type: "line-marker",
						},
						{
							key: "h2",
							marker: "## ",
							name: <b>H2</b>,
							type: "line-marker",
						},
						{
							key: "h3",
							marker: "### ",
							name: <b>H3</b>,
							type: "line-marker",
						},
						{
							key: "h4",
							marker: "#### ",
							name: <b>H4</b>,
							type: "line-marker",
						},
					],
					type: "dropdown",
				},
			],
		},
		{
			key: "text",
			markers: [
				{
					key: "text",
					markers: [
						{
							defaultText: "bold",
							key: "bold",
							prefix: "**",
							suffix: "**",
							type: "marker",
						},
						{
							defaultText: "italic",
							key: "italic",
							prefix: "*",
							suffix: "*",
							type: "marker",
						},
						{
							defaultText: "strikethrough",
							key: "strikethrough",
							prefix: "~~",
							suffix: "~~",
							type: "marker",
						},
						{
							key: "blockquote",
							marker: "> ",
							type: "line-marker",
						},
						{
							defaultText: "inline code",
							key: "inline-code",
							prefix: "`",
							suffix: "`",
							type: "marker",
						},
						{
							defaultText: "code",
							key: "code",
							multipleLine: true,
							prefix: "```",
							suffix: "```",
							type: "marker",
						},
						{
							key: "hr",
							multipleLine: true,
							name: <hr style={{ width: "100%" }} />,
							template: "---",
							type: "template",
						},
					],
					type: "dropdown",
				},
			],
		},
		{
			key: "list",
			markers: [
				{
					key: "unordered-list",
					marker: "* ",
					name: <Icon name="list ul" fitted size="large" />,
					type: "line-marker",
				},
				{
					key: "ordered-list",
					marker: "1. ",
					name: <Icon name="list ol" fitted size="large" />,
					type: "line-marker",
				},
			],
		},
		{
			key: "additional",
			markers: [
				{
					defaultText: "text",
					key: "link",
					name: <Icon name="linkify" fitted size="large" />,
					prefix: "[",
					suffix: "](url)",
					type: "marker",
				},
				{
					defaultText: "YMmdQw17TU4",
					key: "youtube",
					name: <Icon name="youtube play" fitted size="large" />,
					prefix: "@[youtube](",
					suffix: ")",
					type: "marker",
				},
			],
		},
	];
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
