import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
const fadeInAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
 
`;
const fadeOutAnimation = keyframes`
0% { opacity: 1 }
 100% { opacity: 0 }
`;

export const Container = styled.div`
	animation: ${(props) =>
			props.animation ? fadeInAnimation : fadeOutAnimation}
		ease 0.7s;
	display: ${(props) => (props.open ? 'block' : 'none')};
	position: absolute;
	background-color: lightgray;
	width: 325px;
	height: 677px;
	top: 80px;
	right: 101px;
	z-index: 105;
	padding: 1rem 0.5rem;
	max-height: 60vh;
	overflow-y: scroll;
`;
export const CustomLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
	margin-bottom: 2rem;
`;
export const Title = styled.h3``;
export const TitleItem = styled.span``;

export const TotalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
`;
export const TotalTitle = styled.span`
	font-weight: 500;
	font-size: 16px;
`;
export const TotalPrice = styled.span`
	font-weight: 700;
	font-size: 16px;
`;

export const ButtonsContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;
	font-size: 14px;
`;

export const ViewButton = styled.button`
	border: 1px solid #1d1f22;
	width: 140px;
	height: 43px;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all ease 0.3s;
	&:hover {
		background-color: #1d1f2211;
	}
	cursor: pointer;
`;
export const CheckoutButton = styled.button`
	width: 140px;
	height: 43px;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #7fca81;
	color: white;
	transition: all ease 0.3s;

	&:hover {
		background: #5ece7cd1;
	}
	cursor: pointer;
`;
