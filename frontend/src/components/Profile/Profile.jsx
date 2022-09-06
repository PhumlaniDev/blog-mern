import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Icon, Icons, InnerWrapper, Picture, Wrapper } from "./Profile.styled";

import Image from "../../assets/images/Phumlani.jpeg";

const Profile = () => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Picture src={Image} />
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
