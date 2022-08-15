import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Icon, Icons, InnerWrapper, Picture, Wrapper } from "./Profile.styled";

const Profile = () => {
	return (
		<Wrapper>
			<InnerWrapper>
				{/* <Picture src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" /> */}
			</InnerWrapper>
			<h2>Phumlani Arendse</h2>
			<h3>Connect with me:</h3>
			<Icons>
				<Icon>
					<FaGithub />
				</Icon>
				<Icon>
					<FaLinkedinIn />
				</Icon>
				<Icon>
					<FaTwitter />
				</Icon>
			</Icons>
		</Wrapper>
		// <aside>

		// 	<div className="icons">
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 	</div>
		// 	<div className="icons">
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 	</div>
		// 	<div className="icons">
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 		<div className="icon"></div>
		// 	</div>
		// </aside>
	);
};

export default Profile;
