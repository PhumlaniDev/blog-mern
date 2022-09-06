import styled from "styled-components";

export const Wrapper = styled.aside`
	background: #c3d898;
	display: flex;
	width: 20vw;
	height: 100vh;
	position: sticky;
	top: 0;
	align-content: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const InnerWrapper = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 50px;
	background-color: #80727b;
`;

export const Picture = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
`;

export const Icons = styled.div`
	display: flex;
	flex-direction: row;
	width: 150px;
	align-items: center;
	justify-content: space-around;
`;

export const Icon = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: #dcdcdd;
	display: flex;
	align-items: center;
	justify-content: center;
`;
