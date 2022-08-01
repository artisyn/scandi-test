import styled from 'styled-components';
export const Container = styled.div`
	border-top: 1px solid #e5e5e5;
	border-bottom: 1px solid #e5e5e5;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 1rem 0;
`;
export const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
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
export const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const PriceItem = styled.span`
	font-weight: 700;
	font-size: 24px;
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
export const Right = styled.div`
	max-width: fit-content;
	border: 1px solid black;
	min-height: 100%;
	display: flex;
	gap: 0.5rem;
	align-self: stretch;
	justify-content: center;
	align-items: center;
`;

export const QuantityContainer = styled.div`
	flex: 1;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	max-height: 20rem;
`;

export const TopButton = styled.button``;
export const MiddleQuantity = styled.span``;
export const BottomButton = styled.button``;

export const CarouselContainer = styled.div`
	overflow: hidden;
`;
export const Carousel = styled.div``;
export const Image = styled.img``;
export const ArrowLeft = styled.span``;
export const ArrowRight = styled.span``;
