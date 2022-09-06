import styled from "styled-components";

export const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;
	background-color: #1c3144;
	height: 10vh;
	position: sticky;
	z-index: 9999;
	top: 0;

	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul li {
		margin-left: 20px;
	}

	ul li a {
		display: flex;
		align-items: center;
	}

	ul li a:hover {
		color: #777;
	}

	ul li a svg {
		margin-right: 5px;
	}
`;
