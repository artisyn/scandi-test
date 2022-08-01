import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategoriePage from './categoriePage/CategoriePage';
import ProductPage from './productPage/ProductPage';

export default class PageRoutes extends React.Component {
	render() {
		return (
			<Routes>
				<Route
					path="/Shop/categories/:categorieId"
					element={<CategoriePage />}
				/>
				<Route
					path="/Shop/product/:productId"
					element={<ProductPage />}
				/>

				<Route
					path="*"
					element={<Navigate to="/Shop/categories/:Default" />}
				/>
				{/* redirect  */}
			</Routes>
		);
	}
}
