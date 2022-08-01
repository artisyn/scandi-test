import React from 'react';
import CartContext from '../../context/CartContext';
import CategorieItem from './categorieItem/CategorieItem';

import {
	CategorieItemsContainer,
	CategorieTitle,
	Container,
} from './CategoriePageStyles';

export default class CategoriePage extends React.Component {
	// to be able to consume context
	static contextType = CartContext;
	render() {
		return (
			<Container>
				<CategorieTitle>
					{this.context.selectedCategorie.toUpperCase()}
				</CategorieTitle>
				<CategorieItemsContainer>
					{this.context.mainData.length <= 1
						? ''
						: this.context.mainData
								.find(
									(el) =>
										el.name ===
										this.context.selectedCategorie.toLowerCase()
								)
								.products.map((product, i) => (
									<CategorieItem
										key={i}
										product={product}
									></CategorieItem>
								))}
				</CategorieItemsContainer>
			</Container>
		);
	}
}
