import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	padding: 101px;
`;
export const Message = styled.p`
	width: 100%;
	margin-top: 2rem;
	text-align: center;
`;
export const Title = styled.h1`
	width: 100%;
	text-align: left;
`;
export const CartItemsContainer = styled.div`
	margin-top: 2rem;
`;
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 279px;
	margin-top: 1rem;
`;

export const TaxContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	font-size: 24px;
`;
export const TaxTitle = styled.span``;
export const TaxAmount = styled.span`
	font-weight: 700;
`;
export const QuantityContainer = styled.div`
	display: flex;

	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	font-size: 24px;
`;
export const QuantityTitle = styled.span``;
export const QuantityAmount = styled.span`
	font-weight: 700;
`;

export const TotalContainer = styled.div`
	display: flex;

	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	font-size: 24px;
`;
export const TotalTitle = styled.span``;
export const TotalAmount = styled.span`
	font-weight: 700;
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
