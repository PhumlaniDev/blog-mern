import "../index.css";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Image from "../assets/images/Phumlani.jpeg";
import React from "react";

const Blog = ({ image, title, description, post }) => {
	// const str1 =
	// 	"Mahsa Amini, a 22-year-old Kurdish girl, traveled to Tehran on a family holiday. She never returned. She died in the custody of";

	// const truncate = (str, len) => {
	// 	if (str.length > len) {
	// 		if (len <= 10) {
	// 			return str.slice(0, len - 10) + "...";
	// 		} else {
	// 			return str.slice(0, len) + "...";
	// 		}
	// 	} else {
	// 		return str;
	// 	}
	// };

	return (
		<div className="blog">
			<img
				src="https://images.unsplash.com/photo-1630042625045-e98a7cf1cfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
				alt=""
				className="blog_post_img"
			/>
			<div className="user">
				<div className="user_info">
					<img src={Image} alt="profile_picture" />
					<div>
						<h4>Phumlani</h4>
						<p>Posted 2 days ago</p>
					</div>
				</div>
				<div className="action_btns">
					<button className="edit">
						<FaEdit size={"28px"} />
					</button>
					<button className="delete">
						<FaTrashAlt size={"28px"} />
					</button>
				</div>
			</div>
			<h1 className="title">
				What Small Business Owners Around The World Are Doing To Make Their
				Companies Happen
			</h1>
			<h4 className="description">
				There is so much more to business than just the big companies that
				people think of when they think about small businesses. The truth is,
				there are hundreds of small businesses around the world. Each operating
				with their own unique set-up, philosophy and strategies. We're going to
				take a look at some of the ways small business owners around the world
				are successfully making their companies happen.
			</h4>
			<p className="blog_post">
				Small business owners around the world are doing it tough. They're
				struggling to survive and often don't know where their next dollar is
				coming from. But there's hope for those who are willing to take action,
				because many small businesses have found a way to turn their businesses
				around and make them profitable once again. <br /> <br />
				Here are some of the top things small business owners around the world
				are doing that are working for them: <br /> <br />
				1. Focus on quality over quantity: While it's tempting to go down the
				route of churning out as many products as possible, this is a common
				mistake for many small businesses who think they can get away with it.
				Instead, focus on quality and make sure your customers are happy with
				what you produce. This will ensure repeat business, which is essential
				if you want your company to continue growing organically.
				<br />
				<br /> 2. Be creative with marketing: Marketing is important in any
				industry but especially so for small businesses because they have less
				money to spend on advertising than larger companies do. Instead, try
				using social media and other online channels such as Facebook groups or
				Instagram accounts to promote your brand and generate interest in your
				products/services without having to spend too much money on traditional
				marketing tactics like
			</p>
		</div>
	);
};

export default Blog;
