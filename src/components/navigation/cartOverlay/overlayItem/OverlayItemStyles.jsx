import styled from 'styled-components';
export const Container = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
`;
export const Left = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: left;
	gap: 0.5rem;
`;
export const Right = styled.div`
	width: 35%;
	background-color: #fcfbfc;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	max-height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`;
export const BrandAndNameCont = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: #1d1f22;
`;
export const Brand = styled.span`
	font-weight: 300;
	font-size: 16px;
`;
export const Name = styled.span`
	font-weight: 300;
	font-size: 16px;
`;
export const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: #1d1f22;
`;
export const PriceItem = styled.span`
	font-weight: 500;
	font-size: 16px;
`;
export const ColorsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const ColorTitle = styled.span`
	font-weight: 400;
	font-size: 14px;
`;
export const ColorItemsContainer = styled.div`
	display: flex;
	gap: 0.2rem;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const ColorWrap = styled.div`
	padding: 2px;
	border: 2px solid ${(props) => (props.selected ? '#5ece7b' : 'lightgray')};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ColorItem = styled.span`
	width: 24px;
	height: 24px;

	background-color: ${(props) => (props.color ? props.color : 'transparent')};
	cursor: pointer;
`;
export const SizesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const SizeTitle = styled.span`
	font-weight: 400;
	font-size: 14px;
`;
export const SizeItemsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const SizeItem = styled.span`
	cursor: pointer;
	font-size: 1rem;
	border: 1px solid #1d1f22;
	width: 24px;
	height: 24px;
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
	font-weight: 400;
	font-size: 14px;
`;
export const CapacityItemsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
`;
export const CapacityItem = styled.span`
	border: 1px solid black;
	width: 3rem;
	height: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.selected ? ' #1D1F22' : '')};
	color: ${(props) => (props.selected ? 'white' : '')};
	cursor: pointer;
	font-size: 12px;
`;
export const Middle = styled.div`
	width: 10%;
	min-height: 100%;
	display: flex;
	gap: 0.5rem;
	align-self: stretch;
	justify-content: center;
	align-items: center;
`;

export const QuantityContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`;

export const TopButton = styled.button`
	width: 25px;
	height: 25px;
	background: none;
	outline: none;
	border: 1px solid #1d1f22;
	cursor: pointer;
	font-weight: 500;
	font-size: 16px;
`;
export const MiddleQuantity = styled.span`
	width: 25px;
	height: 25px;

	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	font-size: 16px;
`;
export const BottomButton = styled.button`
	width: 25px;
	height: 25px;
	background: none;
	outline: none;
	border: 1px solid #1d1f22;
	cursor: pointer;
	font-weight: 500;
	font-size: 16px;
`;
