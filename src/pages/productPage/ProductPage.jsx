import React from 'react';
import CartContext from '../../context/CartContext';
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
	SmallImage,
	SmallImageContainer,
	StockInfo,
	ColorItemsContainer,
	SizeItemsContainer,
	ColorWrap,
	CapacityContainer,
	CapacityItemsContainer,
	CapacityItem,
	CapacityTitle,
	ButtonContainer,
} from './ProductPageStyles';

export default class ProductPage extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	state = {
		pictureIndex: 0,
		size: 0,
		color: 0,
		capacity: 0,
		usb: 0,
		touch: 0,
		added: false,
	};

	setPictureIndex = (i) => {
		this.setState({
			pictureIndex: i,
		});
	};
	setSize = (size) => {
		this.setState({
			size: size,
		});
	};
	setColor = (color) => {
		this.setState({
			color: color,
		});
	};

	setCapacity = (capacity) => {
		this.setState({
			capacity: capacity,
		});
	};
	setUsb = (boolean) => {
		this.setState({
			usb: boolean,
		});
	};
	setTouch = (boolean) => {
		this.setState({
			touch: boolean,
		});
	};

	setAdded = () => {
		this.setState({
			added: !this.state.added,
		});
		setTimeout(() => {
			this.setState({
				added: !this.state.added,
			});
		}, 1000);
	};

	checkForAttribute = (attr) => {
		let x = this.context.selectedProduct.attributes.find(
			(el) => el.name === attr
		);
		if (x) return true;
		if (!x) return false;
	};
	// make it happen
	addToCart = () => {
		const x = {
			product: this.context.selectedProduct,
			size: this.state.size,
			color: this.state.color,
			capacity: this.state.capacity,
			usb: this.state.usb,
			touch: this.state.touch,
			quantity: 1,
		};
		this.context.addToCart(x);
		this.setAdded();
	};

	render() {
		return (
			<Container>
				<Left>
					{/* map through images */}
					{this.context.selectedProduct === null
						? ''
						: this.context.selectedProduct.gallery.map((el, i) => (
								<SmallImageContainer
									key={i}
									onClick={() => {
										this.setPictureIndex(i);
									}}
								>
									<SmallImage src={el} alt="product image" />
								</SmallImageContainer>
						  ))}
				</Left>
				<Middle>
					<StockInfo display1={this.context.selectedProduct?.inStock}>
						OUT OF STOCK
					</StockInfo>
					<Image
						src={
							this.context.selectedProduct === null
								? ''
								: this.context.selectedProduct.gallery[
										this.state.pictureIndex
								  ]
						}
					/>
				</Middle>
				<Right>
					<BrandAndNameCont>
						<Brand>{this.context.selectedProduct?.brand}</Brand>
						<Name>{this.context.selectedProduct?.name}</Name>
					</BrandAndNameCont>

					{/* Size Block */}
					{this.checkForAttribute('Size') ? (
						<SizesContainer>
							<SizeTitle>SIZE:</SizeTitle>
							<SizeItemsContainer>
								{this.context.selectedProduct.attributes
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
								{this.context.selectedProduct.attributes
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
								{this.context.selectedProduct.attributes
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
								{this.context.selectedProduct.attributes
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
								{this.context.selectedProduct.attributes
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

					<PriceContainer>
						<PriceTitle>PRICE:</PriceTitle>
						<PriceItem>
							{
								this.context.selectedProduct.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								).currency.symbol
							}{' '}
							{
								this.context.selectedProduct.prices.find(
									(el) =>
										el.currency.symbol ==
										this.context.selectedCurrency
								).amount
							}
						</PriceItem>
					</PriceContainer>
					<ButtonContainer
						added={this.state.added}
						display1={!this.context.selectedProduct.inStock}
					>
						<Button
							disabled={!this.context.selectedProduct.inStock}
							onClick={() => {
								this.addToCart();
							}}
						>
							ADD TO CART
						</Button>
					</ButtonContainer>

					<InfoContainer
						dangerouslySetInnerHTML={{
							__html: `${this.context.selectedProduct.description}`,
						}}
					></InfoContainer>
				</Right>
			</Container>
		);
	}
}
