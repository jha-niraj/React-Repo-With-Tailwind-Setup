import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// Importing necessary components to render:
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	)
}

export default App;
