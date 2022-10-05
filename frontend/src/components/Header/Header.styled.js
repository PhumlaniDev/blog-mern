import styled from "styled-components";

export const Wrapper = styled.header`
	height: 60px;
	border-bottom: 1px solid #225560;
	display: flex;
	justify-content: space-between;
	align-items: center;

	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul li {
		margin-left: 20px;
		list-style: none;
	}

	ul li a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #000;
	}

	ul li a:hover {
		color: #777;
	}

	ul li a svg {
		margin-right: 5px;
	}
`;
