import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CategoriePage from './categoriePage/CategoriePage';

export default class PageRoutes extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="Shop/categories/All" element={<CategoriePage />} />
				{/* <Route path="/" element={< />} /> */}

				<Route
					path="*"
					element={<Navigate to="/Shop/categories/All" />}
				/>
				{/* redirect  */}
			</Routes>
		);
	}
}
