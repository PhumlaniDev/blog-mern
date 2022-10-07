import "../index.css";

import { getBlog, reset } from "../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

import Image from "../assets/images/400 x 300 image placeholder.png";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import React from "react";
import { useEffect } from "react";

export const Post = ({ title, description, post }) => {
	const dispatch = useDispatch();

	const { blogs, isError, message } = useSelector((state) => state.blogs);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getBlog());

		return () => {
			dispatch(reset());
		};
	}, [isError, message, dispatch]);

	return (
		<>
			{blogs.length > 0 ? (
				<Posts>
					{blogs.map((item) => (
						<div className="post" key={item._id}>
							<div className="img">
								{item.image ? (
									<img src={item.image} alt="" />
								) : (
									<img src={Image} alt="" />
								)}
							</div>
							<div className="info">
								<div className="post_info">
									<h1 className="title">{item.title}</h1>
									<p className="description">{item.description}</p>
								</div>
								<Link to="blog" className="read_btn">
									Read More
								</Link>
							</div>
						</div>
					))}
				</Posts>
			) : (
				<h3>You have no posts</h3>
			)}
		</>
	);
};

export default Post;
