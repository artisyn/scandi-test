import React from 'react';
import CartContext from '../../../context/CartContext';

import { Container, Name, Quantity, Brand } from './OrderItemStyles';

export default class OrderItem extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	render() {
		return (
			<Container>
				<Brand>{this.props.item.brand}</Brand>
				<Name>{this.props.item.name}</Name>
				<Quantity>X {this.props.item.quantity}</Quantity>
			</Container>
		);
	}
}
