import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartIconContainer = styled.div`
	/* overflow: hidden; */
	width: 3.8rem;
	height: 3.8rem;
	display: ${(props) => (props.display1 ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all ease 0.4s;
	opacity: 0;
	position: absolute;
	right: 1rem;
	bottom: -2rem;
	z-index: 10;
	cursor: pointer;
	&::after {
		position: absolute;
		content: 'Add To Cart';

		opacity: 0;
		transition: all ease 0.4s;
		width: 8rem;
		font-size: 0.8rem;
		color: #5ece7b;
		bottom: -1rem;
		left: -0.4rem;
	}
	&:hover::after {
		opacity: 1;
	}
`;

export const CartIcon = styled.img`
	margin-top: 8px;
	object-fit: cover;
	object-position: center;
`;

export const Container = styled.div`
	position: relative;
	/* border: 1px solid black; */
	padding: 0.5rem;
	min-width: 380px;
	max-width: 380px;
	height: 440px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	transition: all ease 0.3s;
	&:hover {
		-webkit-box-shadow: 0px 0px 41px 5px #e1e1e1;
		-moz-box-shadow: 0px 0px 41px 5px #e1e1e1;
		box-shadow: 0px 0px 41px 5px #e1e1e1;
		${CartIconContainer} {
			opacity: 1;
		}
	}
`;

export const PictureContainer = styled.div`
	height: 354px;
	position: relative;
	width: 100%;
	border: 0.5px solid grey;
`;
export const PictureDimmer = styled.div`
	display: ${(props) => (props.display1 ? 'none' : 'block')};
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #ffffffc1;
`;
export const Picture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;
export const StockInfo = styled.span`
	position: absolute;
	z-index: 2;
	top: 50%;
	width: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #8d8f9a;
	display: ${(props) => (props.display1 ? 'none' : 'flex')};
`;
export const AddToCartInfo = styled.span`
	position: absolute;
	z-index: 4;
	top: 50%;
	width: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #5ece7b;

	transition: all ease 1s;

	opacity: ${(props) => (props.animate ? '1' : '0')};
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	cursor: pointer;
	&::after {
		position: absolute;
		content: 'More Info';
		font-size: 1rem;
		color: grey;
		top: -1rem;
		left: 0;
		opacity: 0;
		transition: opacity ease 0.5s;
	}
	&:hover::after {
		opacity: 1;
	}
`;
export const Title = styled.h4`
	color: ${(props) => (props.display1 ? '#1D1F22' : '#8D8F9A')};
`;
export const Price = styled.span`
	color: ${(props) => (props.display1 ? '#1D1F22' : '#8d8f9a')};
	font-size: 18px;
	font-weight: 500;
`;
export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
