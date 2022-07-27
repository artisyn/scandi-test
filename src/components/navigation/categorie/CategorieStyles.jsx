import styled from 'styled-components';
export const Container = styled.div`
	position: relative;
	font-size: 16px;
	text-transform: uppercase;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all ease 0.3s;
	cursor: pointer;

	&:hover {
		color: #5ece7b;
	}

	&:hover::after {
		content: '';
		transition: all ease 0.3s;

		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #5ece7b;
		bottom: 0;
	}
`;
