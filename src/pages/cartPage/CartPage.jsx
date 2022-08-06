import React from 'react';
import CartItem from './cartItem/CartItem';
import CartContext from '../../context/CartContext';

import {
	Container,
	Message,
	Title,
	CartItemsContainer,
	InfoContainer,
	TaxContainer,
	TaxAmount,
	TaxTitle,
	QuantityContainer,
	QuantityAmount,
	QuantityTitle,
	TotalContainer,
	TotalAmount,
	TotalTitle,
	Button,
	CustomLink,
} from './CartPageStyles';

export default class CartPage extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	render() {
		return (
			<Container>
				<Title>CART</Title>
				{this.context.cart.length < 1 ? (
					<Message>YOUR CART IS EMPTY</Message>
				) : (
					<CartItemsContainer>
						{this.context.cart.map((el, i) => (
							<CartItem key={i} item={el} index={i}></CartItem>
						))}
					</CartItemsContainer>
				)}
				{this.context.cart.length < 1 ? (
					''
				) : (
					<InfoContainer>
						<TaxContainer>
							<TaxTitle>Tax {this.context.tax}%:</TaxTitle>
							<TaxAmount>
								{this.context.selectedCurrency}{' '}
								{(
									this.context.cart.reduce((acu, el, i) => {
										const quantity = el.quantity;
										const itemPrice =
											el.product.prices.find(
												(el) =>
													el.currency.symbol ==
													this.context
														.selectedCurrency
											)?.amount;
										return acu + quantity * itemPrice;
									}, 0) *
									(this.context.tax / 100)
								).toFixed(2)}
							</TaxAmount>
						</TaxContainer>
						<QuantityContainer>
							<QuantityTitle>Quantity:</QuantityTitle>
							<QuantityAmount>
								{this.context.cart.reduce((acu, el) => {
									return acu + +el.quantity;
								}, 0)}
							</QuantityAmount>
						</QuantityContainer>
						<TotalContainer>
							<TotalTitle>Total:</TotalTitle>
							<TotalAmount>
								{this.context.selectedCurrency}{' '}
								{this.context.cart
									.reduce((acu, el, i) => {
										const quantity = el.quantity;
										const itemPrice =
											el.product.prices.find(
												(el) =>
													el.currency.symbol ==
													this.context
														.selectedCurrency
											)?.amount;
										return acu + quantity * itemPrice;
									}, 0)
									.toFixed(2)}
							</TotalAmount>
						</TotalContainer>
						<CustomLink
							to={`/Shop/order`}
							onClick={() => {
								const order = this.context.cart.reduce(
									(acu, el) => {
										const orderItem = {
											name: el.product.name,
											brand: el.product.brand,
											quantity: el.quantity,
											prices: el.product.prices,
										};
										acu.push(orderItem);
										return acu;
									},
									[]
								);

								this.context.setOrder(order);
								this.context.clearCart();
							}}
						>
							<Button>ORDER</Button>
						</CustomLink>
					</InfoContainer>
				)}
			</Container>
		);
	}
}
