import React from 'react';
import CartContext from '../../../context/CartContext';
import {
	Container,
	CustomLink,
	Title,
	TitleContainer,
	TitleItem,
	ButtonsContainer,
	ViewButton,
	CheckoutButton,
	TotalContainer,
	TotalPrice,
	TotalTitle,
} from './CartOverlayStyles';
import OverlayItem from './overlayItem/OverlayItem';

export default class CartOverlay extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	constructor(props) {
		super(props);
		this.modalRef = React.createRef();
	}

	handleClick = (e) => {
		const el = this.modalRef.current;
		if (
			!el ||
			el.contains(e.target) ||
			e.target === this.props.curRef ||
			e.srcElement.localName == 'button'
		)
			return;

		if (!el.contains(e.target)) {
			this.props.changeState();
		}
	};

	preventScroll = (e) => {
		document.body.style.overflowY = 'hidden';
	};
	allowScroll = (e) => {
		document.body.style.overflowY = 'visible';
	};
	componentDidUpdate() {
		if (this.props.open) {
			this.preventScroll();
			this.modalRef.current.style.overflowY = 'scroll';

			setTimeout(() => {
				window.addEventListener('click', this.handleClick);
			}, 300);
		}
		if (!this.props.open) {
			window.removeEventListener('click', this.handleClick);

			this.allowScroll();
		}
	}
	componentWillUnmount() {
		window.removeEventListener('click', this.handleClick);
	}
	render() {
		return (
			<Container
				ref={this.modalRef}
				animation={this.props.animation}
				open={this.props.open}
			>
				<TitleContainer>
					<Title>My Bag, </Title>
					<TitleItem>
						{this.context.cart.reduce((acu, el) => {
							return acu + +el.quantity;
						}, 0)}{' '}
						items
					</TitleItem>
				</TitleContainer>

				{this.context.cart.map((el, i) => (
					<OverlayItem key={i} index={i} item={el} />
				))}

				{this.context.cart.length < 1 ? (
					''
				) : (
					<TotalContainer>
						<TotalTitle>Total:</TotalTitle>
						<TotalPrice>
							{this.context.selectedCurrency}{' '}
							{this.context.cart
								.reduce((acu, el, i) => {
									const quantity = el.quantity;
									const itemPrice = el.product.prices.find(
										(el) =>
											el.currency.symbol ==
											this.context.selectedCurrency
									)?.amount;
									return acu + quantity * itemPrice;
								}, 0)
								.toFixed(2)}
						</TotalPrice>
					</TotalContainer>
				)}

				<ButtonsContainer>
					<CustomLink
						onClick={() => {
							this.props.changeState();
						}}
						to={`/Shop/cart`}
					>
						<ViewButton>View Cart</ViewButton>
					</CustomLink>

					{this.context.cart.length < 1 ? (
						''
					) : (
						<CustomLink
							onClick={() => {
								this.props.changeState();

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
							to={`/Shop/order`}
						>
							<CheckoutButton>CHECK OUT</CheckoutButton>
						</CustomLink>
					)}
				</ButtonsContainer>
			</Container>
		);
	}
}
