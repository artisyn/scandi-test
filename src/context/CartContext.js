import React, { Component } from 'react';

const CartContext = React.createContext('val');

// export class CartProvider extends Component {
// 	state = {
// 		cart: [],
// 	};

// 	addToCart = (obj) => {
// 		this.setState({
// 			cart: [...this.state.cart, obj],
// 		});
// 	};

// 	render() {
// 		const { cart } = this.state;
// 		const { addToCart } = this;
// 		return (
// 			<CartContext.Provider
// 				value={{
// 					cart,
// 					addToCart,
// 				}}
// 			>
// 				{this.props.children}
// 			</CartContext.Provider>
// 		);
// 	}
// }

export default CartContext;
