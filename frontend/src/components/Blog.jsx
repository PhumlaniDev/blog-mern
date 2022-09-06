import { FaEdit, FaTrashAlt } from "react-icons/fa";

import React from "react";
import { deleteBlog } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";

const Blog = ({ blog }) => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(deleteBlog(blog._id));
	};
	return (
		<>
			<div className="post">
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignContent: "center",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<h1>{blog.title}</h1>
					<div>
						<button className="edit">
							<FaEdit />
						</button>
						<button className="delete" onClick={onClick}>
							<FaTrashAlt />
						</button>
					</div>
				</div>
				<p>{blog.post}</p>
			</div>
		</>
	);
};

export default Blog;
