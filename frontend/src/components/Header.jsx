import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
	return (
		<header className="header">
			<div className="Logo">
				<Link to="/">Blog</Link>
			</div>
			<ul>
				<li>
					<Link to="/register">
						<FaUser />
						Register
					</Link>
				</li>
				<li>
					<Link to="/login">
						<FaSignInAlt />
						Login
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
