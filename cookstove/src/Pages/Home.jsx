import React from "react";
import Hero from "../components/Hero";
import HomePricing from "../components/HomePricing";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Hero />
			<Feature />
			<HomePricing />
			<Footer />
		</div>
	);
}

export default Home;
