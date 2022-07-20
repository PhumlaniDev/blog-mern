import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
	const { user } = useSelector((state) => state.auth);
	const { onLogout } = useLogout();

	return (
		<header className="header">
			<div className="Logo">
				<Link to="/">Blog</Link>
			</div>
			<ul>
				{user ? (
					<li>
						<button className="btn" onClick={onLogout}>
							<FaSignOutAlt />
							Sign Out
						</button>
					</li>
				) : (
					<>
						<li>
							<Link to="/login">
								<FaSignInAlt />
							</Link>
						</li>
						<li>
							<Link to="/register">
								<FaUser />
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
};

export default Header;
