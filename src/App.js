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
		selectedCategorie: 'default',
		mainData: [],
		cart: [],
	};
	componentDidMount() {
		// fetch data
	}
	// state mutation
	addToCart = (obj) => {
		this.setState({
			cart: [...this.state.cart, obj],
		});
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

	render() {
		const { cart, mainData, selectedCategorie } = this.state;
		const { addToCart, addMainData, setSelectedCategorie } = this;
		return (
			<ApolloProvider client={client}>
				<Container>
					<CartContext.Provider
						value={{
							cart,
							addToCart,
							mainData,
							addMainData,
							selectedCategorie,
							setSelectedCategorie,
						}}
					>
						<Query query={LOAD_CATEGORIES}>
							{({ loading, data }) => {
								if (!loading && mainData.length <= 1) {
									console.log(data);
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
