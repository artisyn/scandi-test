import React from 'react';
import CartContext from '../../../context/CartContext';
import {
	Container,
	Brand,
	BrandAndNameCont,
	Name,
	PriceContainer,
	PriceItem,
	ColorItem,
	ColorItemsContainer,
	ColorTitle,
	ColorWrap,
	ColorsContainer,
	SizeItem,
	SizeItemsContainer,
	SizeTitle,
	SizesContainer,
	CapacityContainer,
	CapacityItem,
	CapacityItemsContainer,
	CapacityTitle,
	Left,
	Right,
	QuantityContainer,
	TopButton,
	MiddleQuantity,
	BottomButton,
	CarouselContainer,
	Carousel,
	Image,
	ArrowLeft,
	ArrowRight,
} from '../cartItem/CartItemStyles';

export default class CartItem extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	state = {
		pictureIndex: 0,
		size: this.props.item.size,
		color: this.props.item.color,
		capacity: this.props.item.capacity,
		usb: this.props.item.usb,
		touch: this.props.item.touch,
	};
	incrementIndex = () => {
		if (
			this.state.pictureIndex >=
			this.props.item.product.gallery.length - 1
		) {
			this.setState({
				pictureIndex: 0,
			});
		}
		if (
			this.state.pictureIndex <
			this.props.item.product.gallery.length - 1
		) {
			this.setState({
				pictureIndex: this.state.pictureIndex + 1,
			});
		}
	};

	decrementIndex = () => {
		if (this.state.pictureIndex === 0) {
			this.setState({
				pictureIndex: this.props.item.product.gallery.length - 1,
			});
		}
		if (this.state.pictureIndex !== 0) {
			this.setState({
				pictureIndex: this.state.pictureIndex - 1,
			});
		}
	};
	setCountPlus = () => {};
	setCountMinus = () => {};

	setSize = (size) => {
		this.setState({
			size: size,
		});
		this.context.changeCartItem(this.props.index, 'size', size);
	};
	setColor = (color) => {
		this.setState({
			color: color,
		});
		this.context.changeCartItem(this.props.index, 'color', color);
	};

	setCapacity = (capacity) => {
		this.setState({
			capacity: capacity,
		});
		this.context.changeCartItem(this.props.index, 'capacity', capacity);
	};
	setUsb = (boolean) => {
		this.setState({
			usb: boolean,
		});
		this.context.changeCartItem(this.props.index, 'usb', boolean);
	};
	setTouch = (boolean) => {
		this.setState({
			touch: boolean,
		});
		this.context.changeCartItem(this.props.index, 'touch', boolean);
	};
	checkForAttribute = (attr) => {
		let x = this.props.item.product.attributes.find(
			(el) => el.name === attr
		);
		if (x) return true;
		if (!x) return false;
	};

	render() {
		return (
			<Container>
				<Left>
					<BrandAndNameCont>
						<Brand>{this.props.item.product.brand}</Brand>
						<Name>{this.props.item.product.name}</Name>
					</BrandAndNameCont>
					<PriceContainer>
						<PriceItem>
							{
								this.props.item.product.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								).currency.symbol
							}{' '}
							{
								this.props.item.product.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								)?.amount
							}
						</PriceItem>
					</PriceContainer>

					{/* Size Block */}
					{this.checkForAttribute('Size') ? (
						<SizesContainer>
							<SizeTitle>SIZE:</SizeTitle>
							<SizeItemsContainer>
								{this.props.item.product.attributes
									.find((el) => el.name === 'Size')
									.items.map((el, i) => (
										<SizeItem
											key={i}
											selected={i === this.state.size}
											onClick={() => {
												this.setSize(i);
											}}
										>
											{el.displayValue}
										</SizeItem>
									))}
							</SizeItemsContainer>
						</SizesContainer>
					) : (
						''
					)}

					{/* Color Block */}
					{this.checkForAttribute('Color') ? (
						<ColorsContainer>
							<ColorTitle>COLOR:</ColorTitle>
							<ColorItemsContainer>
								{this.props.item.product.attributes
									.find((el) => el.name === 'Color')
									.items.map((el, i) => (
										<ColorWrap
											key={i}
											selected={i === this.state.color}
										>
											<ColorItem
												color={el.value}
												onClick={() => {
													this.setColor(i);
												}}
											></ColorItem>
										</ColorWrap>
									))}
							</ColorItemsContainer>
						</ColorsContainer>
					) : (
						''
					)}
					{/* Capacity Block */}
					{this.checkForAttribute('Capacity') ? (
						<CapacityContainer>
							<CapacityTitle>CAPACITY:</CapacityTitle>
							<CapacityItemsContainer>
								{this.props.item.product.attributes
									.find((el) => el.name === 'Capacity')
									.items.map((el, i) => (
										<CapacityItem
											key={i}
											selected={i === this.state.capacity}
											onClick={() => {
												this.setCapacity(i);
											}}
										>
											{el.displayValue}
										</CapacityItem>
									))}
							</CapacityItemsContainer>
						</CapacityContainer>
					) : (
						''
					)}

					{/* With USB 3 ports Block */}
					{this.checkForAttribute('With USB 3 ports') ? (
						<CapacityContainer>
							<CapacityTitle>WITH USB 3 PORTS:</CapacityTitle>
							<CapacityItemsContainer>
								{this.props.item.product.attributes
									.find(
										(el) => el.name === 'With USB 3 ports'
									)
									.items.map((el, i) => (
										<CapacityItem
											key={i}
											selected={i === this.state.usb}
											onClick={() => {
												this.setUsb(i);
											}}
										>
											{el.displayValue}
										</CapacityItem>
									))}
							</CapacityItemsContainer>
						</CapacityContainer>
					) : (
						''
					)}

					{/* Touch ID in keyboard */}
					{this.checkForAttribute('With USB 3 ports') ? (
						<CapacityContainer>
							<CapacityTitle>TOUCH ID IN KEYBOARD:</CapacityTitle>
							<CapacityItemsContainer>
								{this.props.item.product.attributes
									.find(
										(el) =>
											el.name === 'Touch ID in keyboard'
									)
									.items.map((el, i) => (
										<CapacityItem
											key={i}
											selected={i === this.state.touch}
											onClick={() => {
												this.setTouch(i);
											}}
										>
											{el.displayValue}
										</CapacityItem>
									))}
							</CapacityItemsContainer>
						</CapacityContainer>
					) : (
						''
					)}
				</Left>
				<Right>
					<QuantityContainer>
						<TopButton
							onClick={() => {
								this.context.incrementCartItem(
									this.props.index
								);
							}}
						>
							+
						</TopButton>
						<MiddleQuantity>
							{this.props.item.quantity}
						</MiddleQuantity>
						<BottomButton
							onClick={() => {
								this.context.decrementCartItem(
									this.props.index
								);
							}}
						>
							-
						</BottomButton>
					</QuantityContainer>
					<CarouselContainer>
						<ArrowLeft
							onClick={() => {
								this.decrementIndex();
							}}
						>{`<`}</ArrowLeft>
						<Carousel index={this.state.pictureIndex}>
							{/* map through imgs */}
							{this.props.item.product.gallery.map((el, i) => (
								<Image key={i} alt="product image" src={el} />
							))}
						</Carousel>
						<ArrowRight
							onClick={() => {
								this.incrementIndex();
							}}
						>
							{'>'}
						</ArrowRight>
					</CarouselContainer>
				</Right>
			</Container>
		);
	}
}
