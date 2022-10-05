import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>Created with ❤️ by Phumlani Arendse {currentYear}</p>
		</footer>
	);
};

export default Footer;
