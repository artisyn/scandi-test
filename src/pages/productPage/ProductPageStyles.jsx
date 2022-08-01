import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid black;
	padding: 2rem 101px;
	display: flex;
	gap: 1rem;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const SmallImageContainer = styled.div`
	width: 80px;
	height: 80px;
	border: 0.5px solid gray;
	cursor: pointer;
	transition: all ease 0.3s;

	&:hover {
		-webkit-box-shadow: 0px 0px 41px 5px #e1e1e1;
		-moz-box-shadow: 0px 0px 41px 5px #e1e1e1;
		box-shadow: 0px 0px 41px 5px #e1e1e1;
	}
`;
export const SmallImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

export const Middle = styled.div`
	flex: 6;
	padding: 0.5rem;
	position: relative;
	height: 640px;
	width: 640px;
	min-width: 400px;
	overflow: hidden;
	border: 1px solid black;
	margin-right: 3rem;
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
export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;
export const Right = styled.div`
	flex: 4;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
export const BrandAndNameCont = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const Brand = styled.span`
	font-weight: 600;
	font-size: 30px;
`;
export const Name = styled.span`
	font-weight: 400;
	font-size: 30px;
`;

export const SizesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const SizeTitle = styled.span`
	font-weight: 700;
	font-size: 18px;
`;
export const SizeItemsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
`;

export const SizeItem = styled.span`
	cursor: pointer;
	font-size: 1rem;
	border: 1px solid #1d1f22;
	width: 63px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.selected ? ' #1D1F22' : '')};
	color: ${(props) => (props.selected ? 'white' : '')};
`;

export const ColorsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const ColorTitle = styled.span`
	font-weight: 700;
	font-size: 18px;
`;
export const ColorItemsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
`;

export const ColorWrap = styled.div`
	padding: 3px;
	border: 2px solid ${(props) => (props.selected ? '#5ece7b' : 'white')};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ColorItem = styled.span`
	width: 32px;
	height: 32px;

	background-color: ${(props) => (props.color ? props.color : 'transparent')};
	cursor: pointer;
`;

export const CapacityContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const CapacityTitle = styled.span`
	font-weight: 700;
	font-size: 18px;
`;
export const CapacityItemsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
`;
export const CapacityItem = styled.span`
	border: 1px solid black;
	width: 4rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.selected ? ' #1D1F22' : '')};
	color: ${(props) => (props.selected ? 'white' : '')};
	cursor: pointer;
`;

export const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const PriceTitle = styled.span`
	font-weight: 700;
	font-size: 18px;
`;
export const PriceItem = styled.span`
	font-weight: 700;
	font-size: 24px;
`;

export const Button = styled.button`
	outline: none;
	border: none;
	width: 292px;
	height: 52px;
	color: white;
	font-weight: 600;
	font-size: 1rem;
	background: #5ece7b;
	cursor: pointer;
	transition: all ease 0.3s;
	&:hover {
		background: #5ece7cd1;
	}
`;
export const InfoContainer = styled.div``;
