import "../index.css";

import Image from "../assets/images/400 x 300 image placeholder.png";
import { Link } from "react-router-dom";
import React from "react";

export const Post = ({ title, post }) => {
	const str1 =
		"Mahsa Amini, a 22-year-old Kurdish girl, traveled to Tehran on a family holiday. She never returned. She died in the custody of";

	const truncate = (str, len) => {
		if (str.length > len) {
			if (len <= 10) {
				return str.slice(0, len - 10) + "...";
			} else {
				return str.slice(0, len) + "...";
			}
		} else {
			return str;
		}
	};
	return (
		<div className="post">
			<div className="post__img">
				<img src={Image} alt="" />
			</div>
			<div className="info">
				<div className="post_info">
					<h1 className="title">{title}</h1>
					<p className="description">{truncate(str1, 100)}</p>
				</div>
				<Link to="blog" className="read_btn">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Post;
