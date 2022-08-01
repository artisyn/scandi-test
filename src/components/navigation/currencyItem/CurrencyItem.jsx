import React from 'react';
import { Container } from './CurrencyItemStyles';

export default class CurrencyItem extends React.Component {
	render() {
		return <Container {...this.props}>{this.props.children}</Container>;
	}
}
