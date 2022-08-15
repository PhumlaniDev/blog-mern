import React from "react";

const Blog = ({ blog }) => {
	return (
		<>
			<div className="post">
				<h1>{blog.title}</h1>
				<p>{blog.post}</p>
			</div>
		</>
	);
};

export default Blog;
