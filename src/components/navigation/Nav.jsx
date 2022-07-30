import React from 'react';
import shopLogo from '../../assets/shopLogo.svg';
import cartLogo from '../../assets/cartLogo.svg';
import arrowLogo from '../../assets/arrow.svg';
import Categorie from './categorie/Categorie';
import CurrencyItem from './currencyItem/CurrencyItem';

import {
	Container,
	LeftSection,
	MiddleSection,
	RightSection,
	Image,
	LogoContainer,
	CurrencyContainer,
	CartLogoContainer,
	CurrencyOverlayContainer,
	CartOverlayContainer,
	SelectedCurrencyContainer,
	SymbolContainer,
	ArrowContainer,
	CartItemsCounter,
	CartModalDimmer,
} from './NavStyles';
import CartContext from '../../context/CartContext';

export default class Nav extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	state = {
		animationStart: false,
		cartIsOpen: false,
		currencyIsOpen: false,
	};

	handleCurrencyModal = () => {
		this.setState({
			// cartIsOpen: false,
			currencyIsOpen: !this.state.currencyIsOpen,
		});
	};
	handelCartModal = () => {
		if (!this.state.cartIsOpen) {
			this.setState({
				animationStart: !this.state.animationStart,
				cartIsOpen: !this.state.cartIsOpen,
				currencyIsOpen: false,
			});
			return;
		}
		if (this.state.cartIsOpen) {
			this.setState({
				animationStart: !this.state.animationStart,
			});
			// timeout to wait for fadeout animation to complete

			setTimeout(() => {
				this.setState({
					cartIsOpen: !this.state.cartIsOpen,
					currencyIsOpen: false,
				});
			}, 700);
			return;
		}
	};

	testClick = () => {
		console.log(this.context.mainData);
	};

	render() {
		// console.log(this.context.cart);
		return (
			<Container>
				<LeftSection>
					{/* map all categories */}
					{this.context.mainData.length <= 1
						? ''
						: this.context.mainData.map((categorie) => {
								{
									console.log(categorie.name);
								}
								return (
									<Categorie
										highlighted={
											this.context.selectedCategorie.toUpperCase() ===
											categorie.name.toUpperCase()
												? true
												: false
										}
										onClick={() => {
											this.context.setSelectedCategorie(
												categorie.name
											);
										}}
									>
										{categorie.name}
									</Categorie>
								);
						  })}
				</LeftSection>
				<MiddleSection>
					<LogoContainer>
						<Image src={shopLogo} alt="store logo" />
					</LogoContainer>
				</MiddleSection>
				<RightSection>
					<CurrencyContainer>
						{/* selected currency */}
						<SelectedCurrencyContainer
							onClick={() => {
								this.handleCurrencyModal();
								this.testClick();
							}}
						>
							<SymbolContainer>$</SymbolContainer>
							<ArrowContainer open={this.state.currencyIsOpen}>
								<Image src={arrowLogo} alt="arrow" />
							</ArrowContainer>
						</SelectedCurrencyContainer>
					</CurrencyContainer>
					<CartLogoContainer
						onClick={() => {
							this.handelCartModal();
						}}
					>
						<Image src={cartLogo} alt="cart image" />
						{/* current numbler of items */}
						<CartItemsCounter>
							{this.context.cart.length}
						</CartItemsCounter>
					</CartLogoContainer>
				</RightSection>
				<CurrencyOverlayContainer open={this.state.currencyIsOpen}>
					{/* map all currencies */}
					{this.context.mainData.length <= 1
						? ''
						: this.context.mainData[0].products[0].prices.map(
								(price) => (
									<CurrencyItem>
										{price.currency.symbol}{' '}
										{price.currency.label}
									</CurrencyItem>
								)
						  )}
					{/* <CurrencyItem>$ USD</CurrencyItem> */}
				</CurrencyOverlayContainer>
				<CartOverlayContainer
					open={this.state.cartIsOpen}
					animation={this.state.animationStart}
				></CartOverlayContainer>
				<CartModalDimmer
					open={this.state.cartIsOpen}
					animation={this.state.animationStart}
				/>
			</Container>
		);
	}
}
