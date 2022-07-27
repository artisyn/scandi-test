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

export default class Nav extends React.Component {
	state = {
		cartIsOpen: false,
		currencyIsOpen: false,
	};

	handleCurrencyModal = () => {
		this.setState({
			cartIsOpen: false,
			currencyIsOpen: !this.state.currencyIsOpen,
		});
		console.log(this.state.currencyIsOpen);
	};
	handelCartModal = () => {
		this.setState({
			cartIsOpen: !this.state.cartIsOpen,
			currencyIsOpen: false,
		});
		console.log(this.state.cartIsOpen);
	};

	render() {
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
							<ArrowContainer>
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
				></CartOverlayContainer>
				<CartModalDimmer open={this.state.cartIsOpen} />
			</Container>
		);
	}
}
