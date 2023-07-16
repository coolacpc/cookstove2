import React from "react";
import ScrollToTopButton from "../components/Scrolltotop";
import Hero from "../components/Hero";
import About from "../components/About";
import HomePricing from "../components/HomePricing";
import Feature from "../components/Feature";
import Devicedetails from "../components/Devicedetails";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<ScrollToTopButton />
			<Hero />
			<Devicedetails />
			<About />
			<Feature />
			<HomePricing />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;
