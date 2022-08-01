import React from 'react';
import {
	Container,
	Left,
	Right,
	Image,
	BrandAndNameCont,
	Brand,
	Name,
	SizesContainer,
	SizeItem,
	SizeTitle,
	ColorsContainer,
	ColorItem,
	ColorTitle,
	PriceContainer,
	PriceItem,
	PriceTitle,
	Button,
	InfoContainer,
	Middle,
} from './ProductPageStyles';

export default class ProductPage extends React.Component {
	render() {
		return (
			<Container>
				<Left>{/* map through images */}</Left>
				<Middle>
					<Image />
				</Middle>
				<Right>
					<BrandAndNameCont>
						<Brand></Brand>
						<Name></Name>
					</BrandAndNameCont>
					<SizesContainer>
						<SizeTitle>SIZE:</SizeTitle>
						{/* map through sizeItems */}
						<SizeItem></SizeItem>
					</SizesContainer>
					<ColorsContainer>
						<ColorTitle>COLOR:</ColorTitle>
						{/* map through colorItems */}
						<ColorItem></ColorItem>
					</ColorsContainer>
					<PriceContainer>
						<PriceTitle>PRICE:</PriceTitle>
						<PriceItem></PriceItem>
					</PriceContainer>
					<Button>ADD TO CART</Button>
					<InfoContainer></InfoContainer>
				</Right>
			</Container>
		);
	}
}
