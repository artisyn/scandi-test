import React from 'react';
import CartContext from '../../context/CartContext';
import OrderItem from './orderItem/OrderItem';
import {
	Container,
	Title,
	SubTitle,
	DetailsContainer,
	DetailsTitle,
	TotalContainer,
	TotalTitle,
	PriceContainer,
	Button,
	CustomLink,
} from './OrderPageStyles';

export default class OrderPage extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	render() {
		return (
			<Container>
				<Title>YOUR ORDER IS ON THE WAY!</Title>
				<SubTitle>Thanks For Choosing Our Store.</SubTitle>
				<DetailsContainer>
					<DetailsTitle>ORDER DETAILS:</DetailsTitle>
					{this.context.order.map((el, i) => (
						<OrderItem item={el} key={i}></OrderItem>
					))}
					<TotalContainer>
						<TotalTitle>TOTAL:</TotalTitle>
						<PriceContainer>
							{this.context.selectedCurrency}{' '}
							{this.context.order
								.reduce((acu, el, i) => {
									const quantity = el.quantity;
									const itemPrice = el.prices.find(
										(el) =>
											el.currency.symbol ==
											this.context.selectedCurrency
									)?.amount;
									return acu + quantity * itemPrice;
								}, 0)
								.toFixed(2)}
						</PriceContainer>
					</TotalContainer>
					{/* make link */}
					<CustomLink
						to={`/Shop/categories/:Default`}
						onClick={() => {
							this.context.setSelectedCategorie('all');
						}}
					>
						<Button>Return Home</Button>
					</CustomLink>
				</DetailsContainer>
			</Container>
		);
	}
}
