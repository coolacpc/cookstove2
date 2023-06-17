import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Clients from "./Pages/Clients";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/clients" element={<Clients />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
