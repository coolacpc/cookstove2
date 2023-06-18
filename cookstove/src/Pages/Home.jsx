import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import HomePricing from "../components/HomePricing";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Feature />
			<HomePricing />
			<Footer />
		</div>
	);
}

export default Home;
