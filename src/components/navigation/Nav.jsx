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
			cartIsOpen: false,
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

	render() {
		console.log(this.context.cart);
		return (
			<Container>
				<LeftSection>
					{/* map all categories */}
					<Categorie>Mens</Categorie>
					<Categorie>Women</Categorie>
					<Categorie>Kids</Categorie>
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
						<CartItemsCounter>3</CartItemsCounter>
					</CartLogoContainer>
				</RightSection>
				<CurrencyOverlayContainer open={this.state.currencyIsOpen}>
					{/* map all currencies */}
					<CurrencyItem>$ USD</CurrencyItem>
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
