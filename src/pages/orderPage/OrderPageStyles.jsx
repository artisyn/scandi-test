import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	min-height: 100vh;
	padding: 2rem 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 2rem;
`;

export const Title = styled.h1``;
export const SubTitle = styled.h2``;

export const DetailsContainer = styled.div`
	padding: 1rem;
	width: 50vw;
	border: 2px solid black;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;
export const DetailsTitle = styled.h3``;

export const TotalContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TotalTitle = styled.span`
	font-size: 1.3rem;
	font-weight: 500;
`;
export const PriceContainer = styled.span`
	font-size: 1.3rem;
	font-weight: 600;
`;

export const Button = styled.button`
	width: 279px;
	height: 43px;
	background: #5ece7b;
	color: white;
	font-weight: 600;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all ease 0.3s;
	cursor: pointer;

	&:hover {
		background: #5ece7cd1;
	}
`;

export const CustomLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
