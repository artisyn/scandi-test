import React from 'react';

import {
	Container,
	PictureContainer,
	Picture,
	Price,
	StockInfo,
	Title,
} from '../categorieItem/CategorieItemStyles';

export default class CategorieItem extends React.Component {
	render() {
		return (
			<Container>
				<PictureContainer>
					<Picture></Picture>
					<StockInfo></StockInfo>
				</PictureContainer>
				<Title></Title>
				<Price></Price>
			</Container>
		);
	}
}
