import React from 'react';
import CartItem from './cartItem/CartItem';
import CartContext from '../../context/CartContext';

import {
	Container,
	Message,
	Title,
	CartItemsContainer,
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
			</Container>
		);
	}
}
