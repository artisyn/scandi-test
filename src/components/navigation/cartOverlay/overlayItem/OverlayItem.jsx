import React from 'react';
import { Container, Left, Right, Image } from './OverlayItemStyles';

export default class OverlayItem extends React.Component {
	render() {
		return (
			<Container>
				<Left></Left>
				<Right>
					<Image
						alt="product image"
						src={this.props.item.product.gallery[0]}
					></Image>
				</Right>
			</Container>
		);
	}
}
