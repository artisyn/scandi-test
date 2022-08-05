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
`;
export const Title = styled.h3``;
export const TitleItem = styled.span``;
