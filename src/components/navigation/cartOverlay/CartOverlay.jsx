import React from 'react';
import CartContext from '../../../context/CartContext';
import {
	Container,
	CustomLink,
	Title,
	TitleContainer,
	TitleItem,
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
		if (!el || el.contains(e.target) || e.target === this.props.curRef)
			return;

		if (!el.contains(e.target)) {
			this.props.changeState();
		}
	};
	preventScroll = (e) => {
		e.preventDefault();
		e.stopPropagation();

		return false;
	};
	handleScroll = (e) => {
		document.body.style.overflowY = 'hidden';
	};
	componentDidUpdate() {
		if (this.props.open) {
			setTimeout(() => {
				window.addEventListener('click', this.handleClick);
				window.addEventListener('wheel', this.preventScroll, {
					passive: false,
				});
			}, 300);
		}
		if (!this.props.open) {
			window.removeEventListener('click', this.handleClick);
			window.removeEventListener('wheel', this.preventScroll, {
				passive: false,
			});
		}
	}
	componentWillUnmount() {
		window.removeEventListener('click', this.handleClick);
		window.removeEventListener('wheel', this.preventScroll, {
			passive: false,
		});
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
				<CustomLink
					onClick={() => {
						this.props.changeState();
					}}
					to={`/Shop/cart`}
				>
					View Cart
				</CustomLink>
			</Container>
		);
	}
}
