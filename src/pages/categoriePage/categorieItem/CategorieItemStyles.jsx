import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid black;
	min-width: 386px;
	height: 399px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const PictureContainer = styled.div`
	height: 300px;
	position: relative;
`;
export const Picture = styled.img`
	height: 100%;
	object-fit: cover;
	object-position: center;
`;
export const StockInfo = styled.span`
	position: absolute;
	z-index: 2;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.h4`
	color: grey;
`;
export const Price = styled.span`
	color: black;
	font-size: 18px;
	font-weight: 500;
`;
