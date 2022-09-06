import { FaPlus, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { Wrapper } from "./Header.styled";
import { useLogout } from "../../hook/useLogout";
import { useSelector } from "react-redux";

const Header = () => {
	const { user } = useSelector((state) => state.auth);
	const { onLogout } = useLogout();

	return (
		<Wrapper>
			<div className="logo">
				<Link to="/">My Journey</Link>
			</div>
			<ul>
				{user ? (
					<>
						<li>
							<Link to="/write">
								<FaPlus />
							</Link>
						</li>
						<li>
							<button className="btn" onClick={onLogout}>
								<FaSignOutAlt />
								Sign Out
							</button>
						</li>
					</>
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
		</Wrapper>
	);
};

export default Header;
