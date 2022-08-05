import styled from 'styled-components';
export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Left = styled.div`
	border: 1px solid red;
	flex: 2;
	width: 60%;
`;
export const Right = styled.div`
	flex: 1;
	border: 1px solid green;
	width: 40%;
	height: 6rem;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;
