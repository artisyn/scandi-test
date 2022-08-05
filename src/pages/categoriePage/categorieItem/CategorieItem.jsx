import React from 'react';
import CartContext from '../../../context/CartContext';
import logo from '../../../assets/hoverCart.svg';

import {
	Container,
	PictureContainer,
	Picture,
	Price,
	StockInfo,
	Title,
	CartIcon,
	PictureDimmer,
	Wrapper,
	StyledLink,
	CartIconContainer,
} from '../categorieItem/CategorieItemStyles';

export default class CategorieItem extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	handleAddToCart = () => {
		console.log('addedToCart');
	};
	handleProductPage = () => {
		this.context.setSelectedProduct(this.props.product);
	};
	render() {
		return (
			<Container>
				<PictureContainer>
					<PictureDimmer display1={this.props.product.inStock} />
					<CartIconContainer display1={this.props.product.inStock}>
						<CartIcon
							src={logo}
							onClick={() => {
								this.handleAddToCart();
							}}
						/>
					</CartIconContainer>

					<Picture src={this.props.product.gallery[0]}></Picture>
					<StockInfo display1={this.props.product.inStock}>
						OUT OF STOCK
					</StockInfo>
				</PictureContainer>
				<StyledLink to={`/Shop/product/${this.props.product.name}`}>
					<Wrapper
						onClick={() => {
							this.handleProductPage();
						}}
					>
						<Title display1={this.props.product.inStock}>
							{this.props.product.name}
						</Title>
						<Price display1={this.props.product.inStock}>
							{
								this.props.product.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								).currency.symbol
							}{' '}
							{
								this.props.product.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								).amount
							}
						</Price>
					</Wrapper>
				</StyledLink>
			</Container>
		);
	}
}
