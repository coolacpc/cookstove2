import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import HomePricing from "../components/HomePricing";
import Feature from "../components/Feature";
import Devicedetails from "../components/Devicedetails";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Hero />
			<Devicedetails />
			<About />
			<Feature />
			<HomePricing />
			<Footer />
		</div>
	);
}

export default Home;
