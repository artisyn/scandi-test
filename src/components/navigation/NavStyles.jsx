import styled, { keyframes } from 'styled-components';
import { Keyframes } from 'styled-components';

export const Container = styled.div`
	position: relative;
	height: 80px;
	border: 1px solid grey;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 101px;
`;
export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 32px;
	height: 100%;
`;

export const MiddleSection = styled.div``;
export const LogoContainer = styled.div``;
export const Image = styled.img``;

export const RightSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
`;
export const CurrencyContainer = styled.div``;
export const SelectedCurrencyContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

export const ArrowContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all ease 0.3s;
	transform: rotate(${(props) => (props.open ? 0 : 180)}deg);
`;
export const SymbolContainer = styled.span`
	font-size: 18px;
	font-weight: 500;
`;
export const CartLogoContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
export const CartItemsCounter = styled.div`
	position: absolute;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 15px;
	height: 15px;
	background-color: black;
	color: white;
	top: -8px;
	right: -8px;
	font-size: 8px;
	font-weight: 500;
`;
const fadeInAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
 
`;
const fadeOutAnimation = keyframes`
0% { opacity: 1 }
 100% { opacity: 0 }
`;

export const CartOverlayContainer = styled.div`
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
	z-index: 10;
`;
export const CartModalDimmer = styled.div`
	animation: ${(props) =>
			props.animation ? fadeInAnimation : fadeOutAnimation}
		ease 0.7s;
	display: ${(props) => (props.open ? 'block' : 'none')};
	position: absolute;
	width: 100%;
	height: calc(100vh - 81px);
	top: 80px;
	left: 0;
	z-index: 8;
	background-color: #000000ad;
`;
export const CurrencyOverlayContainer = styled.div`
	z-index: 20;
	animation: ${(props) => (props.open ? fadeInAnimation : fadeOutAnimation)}
		ease 0.7s;
	display: ${(props) => (props.open ? 'flex' : 'none')};
	position: absolute;
	width: 114px;
	height: 169px;
	top: 60px;
	right: 70px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.5rem;
	background-color: white;
	-webkit-box-shadow: 0px 0px 41px 5px rgba(246, 246, 246, 1);
	-moz-box-shadow: 0px 0px 41px 5px rgba(246, 246, 246, 1);
	box-shadow: 0px 0px 41px 5px rgba(246, 246, 246, 1);
`;
