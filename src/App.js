import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';

import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { LOAD_CATEGORIES } from './GraphQL/Queries';
import { onError } from '@apollo/client/link/error';
import styled from 'styled-components';
import Nav from './components/navigation/Nav';
import CartContext from './context/CartContext';
import PageRoutes from './pages/PageRoutes';

const Container = styled.div`
	min-height: 100vh;
`;

// Apollo logic
const errorLink = onError(({ graphqlErrors, networkError }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			alert(`Graphql errorr ${message}`);
		});
	}
});
const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000' })]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

class App extends React.Component {
	// main state
	state = {
		selectedProduct: null,
		selectedCategorie: 'all',
		selectedCurrency: '$',
		mainData: [],
		cart: [],
	};
	componentDidMount() {
		// fetch data
	}
	// state mutation
	addToCart = (obj) => {
		//find if there is a match
		const index = this.state.cart.findIndex(
			(el) =>
				el.product.name === obj.product.name &&
				el.size === obj.size &&
				el.color === obj.color &&
				el.capacity === obj.capacity &&
				el.usb === obj.usb &&
				el.touch === obj.touch
		);
		console.log(index);
		// if match update the quantity
		if (index !== -1) {
			// make a copy of initial cart
			let cartCopy = [...this.state.cart];
			// make a copy of obj to mutate
			let newCartItem = { ...cartCopy[index] };

			newCartItem.quantity = newCartItem.quantity + 1;
			cartCopy[index] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
		//if no match add new obj
		if (index === -1) {
			this.setState({
				cart: [...this.state.cart, obj],
			});
		}
	};
	removeFromCart = (i) => {
		let cartCopy = [...this.state.cart];
		cartCopy.slice(i, 1);
		this.setState({
			cart: cartCopy,
		});
	};
	changeCartItem = (i, type, change) => {
		// make a copy of initial cart
		let cartCopy = [...this.state.cart];
		// make a copy of obj to mutate
		let newCartItem = { ...cartCopy[i] };

		if (type === 'color') {
			newCartItem.color = change;
			cartCopy[i] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
		if (type === 'size') {
			newCartItem.size = change;
			cartCopy[i] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
		if (type === 'capacity') {
			newCartItem.capacity = change;
			cartCopy[i] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
		if (type === 'usb') {
			newCartItem.usb = change;
			cartCopy[i] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
		if (type === 'touch') {
			newCartItem.touch = change;
			cartCopy[i] = newCartItem;
			this.setState({
				cart: cartCopy,
			});
		}
	};

	addMainData = (data) => {
		this.setState({
			mainData: data,
		});
	};

	setSelectedCategorie = (cat) => {
		this.setState({
			selectedCategorie: cat,
		});
	};
	setSelectedCurrency = (cur) => {
		this.setState({
			selectedCurrency: cur,
		});
	};
	setSelectedProduct = (prod) => {
		this.setState({
			selectedProduct: prod,
		});
	};

	render() {
		const {
			cart,
			mainData,
			selectedCategorie,
			selectedCurrency,
			selectedProduct,
		} = this.state;
		const {
			addToCart,
			removeFromCart,
			addMainData,
			setSelectedCategorie,
			setSelectedCurrency,
			setSelectedProduct,
			changeCartItem,
		} = this;
		return (
			<ApolloProvider client={client}>
				<Container>
					<CartContext.Provider
						value={{
							cart,
							addToCart,
							removeFromCart,
							mainData,
							addMainData,
							selectedCategorie,
							setSelectedCategorie,
							selectedCurrency,
							setSelectedCurrency,
							selectedProduct,
							setSelectedProduct,
							changeCartItem,
						}}
					>
						<Query query={LOAD_CATEGORIES}>
							{({ loading, data }) => {
								if (!loading && mainData.length <= 1) {
									// console.log(data);
									this.setState({
										selectedCategorie:
											data.categories[0].name,
										mainData: data.categories,
									});
								}
							}}
						</Query>
						<Nav />
						<PageRoutes />
					</CartContext.Provider>
				</Container>
			</ApolloProvider>
		);
	}
}

export default App;
