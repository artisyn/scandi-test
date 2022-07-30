import React from 'react';
import { Container } from './CategorieStyles';

export default class Categorie extends React.Component {
	render() {
		return <Container {...this.props}>{this.props.children}</Container>;
	}
}
