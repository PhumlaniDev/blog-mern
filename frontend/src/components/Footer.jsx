import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="footer">
			<p>Created with ❤️ by Phumlani Arendse {currentYear}</p>
		</div>
	);
};

export default Footer;
